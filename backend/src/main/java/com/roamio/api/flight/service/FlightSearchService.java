package com.roamio.api.flight.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.roamio.api.flight.client.CarbonInterfaceClient;
import com.roamio.api.flight.client.TravelpayoutsClient;
import com.roamio.api.flight.dto.CarbonEstimate;
import com.roamio.api.flight.dto.FlightDTO;
import com.roamio.api.flightsearchcache.model.FlightSearchCache;
import com.roamio.api.flightsearchcache.repository.FlightSearchCacheRepository;
import com.roamio.api.scoring.service.EcoScoreService;
import com.roamio.api.scoring.service.GlobalScoreService;
import com.roamio.api.scoring.service.PriceScoreService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HexFormat;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class FlightSearchService {

    private final FlightSearchCacheRepository cacheRepo;
    private final TravelpayoutsClient tpClient;
    private final CarbonInterfaceClient carbonClient;
    private final PriceScoreService priceScoreService;
    private final EcoScoreService ecoScoreService;
    private final GlobalScoreService globalScoreService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Entry point called by FlightController.
     * Computes the cache key for this search. If a cached result exists it is
     * returned immediately. Otherwise the full fetch → enrich → score pipeline
     * runs and the result is stored in the cache before being returned.
     */
    public List<FlightDTO> search(String origin, String destination,
            String departDate, String currency,
            int passengers, double w1, double w2) {

        String hash = ConvertSearchToHash(origin, destination, departDate, currency, passengers);

        return cacheRepo.findBySearchHash(hash)
                .map(cached -> parseJson(cached.getResultsJson()))
                .orElseGet(() -> executeAndCacheSearch(
                        hash, origin, destination, departDate, currency, passengers, w1, w2));
    }

    /**
     * Cache miss handler — runs the full pipeline for a new user search and
     * persists the enriched results so the same query never hits external APIs
     * twice.
     *
     * 1. Fetch prices from Travelpayouts
     * 2. Enrich each flight with CO₂ data from Carbon Interface
     * 3. Compute price score, eco score and final score across the result set
     * 4. Save the search + enriched results in flight_search_cache
     */
    private List<FlightDTO> executeAndCacheSearch(
            String hash, String origin, String destination,
            String departDate, String currency,
            int passengers, double w1, double w2) {

        // 1. Fetch
        List<FlightDTO> flights = tpClient.getCheapFlights(origin, destination, departDate, currency);
        if (flights.isEmpty())
            return flights;

        // 2. Enrich with CO₂
        flights.forEach(flight -> {
            CarbonEstimate estimate = carbonClient.estimate(
                    flight.getDepartureAirport(), flight.getArrivalAirport(), passengers);
            flight.setCo2(estimate.getCarbonKg());
            flight.setDistanceKm(estimate.getDistanceKm());
        });

        // 3. Score
        priceScoreService.calculatePricesScore(flights);
        ecoScoreService.calculateEcoScore(flights);
        globalScoreService.calculateFinalScores(flights, w1, w2);

        // 4. Cache — next identical search is served instantly without API calls
        cacheRepo.save(FlightSearchCache.builder()
                .searchHash(hash)
                .origin(origin)
                .destination(destination)
                .departureDate(LocalDate.parse(departDate))
                .currency(currency)
                .resultsJson(toJson(flights))
                .build());

        return flights;
    }

    /**
     * Converts the five search parameters into a single SHA-256 hex string used
     * as the cache key. SHA-256 is collision-resistant, so two different searches
     * will never produce the same hash and accidentally share a cached result.
     */
    private String ConvertSearchToHash(String origin, String destination,
            String departDate, String currency, int passengers) {
        String search = origin + destination + departDate + currency + passengers;
        try {
            byte[] hash = MessageDigest.getInstance("SHA-256")
                    .digest(search.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 unavailable", e);
        }
    }

    private List<FlightDTO> parseJson(String json) {
        try {
            return objectMapper.readValue(json, new TypeReference<>() {
            });
        } catch (Exception e) {
            log.error("Failed to parse cached flight JSON", e);
            return new ArrayList<>();
        }
    }

    private String toJson(List<FlightDTO> flights) {
        try {
            return objectMapper.writeValueAsString(flights);
        } catch (Exception e) {
            log.error("Failed to serialise flights to JSON", e);
            return "[]";
        }
    }
}
