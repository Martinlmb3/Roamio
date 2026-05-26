package com.roamio.api.flight.client;

import com.roamio.api.flight.dto.FlightDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class TravelpayoutsClient {

    @Value("${travelpayouts.api-token}")
    private String apiToken;

    private final RestTemplate restTemplate = new RestTemplate();
    private static final String BASE_URL = "https://api.travelpayouts.com";

    public List<FlightDTO> getCheapFlights(String origin, String destination,
                                            String departDate, String currency) {
        String url = UriComponentsBuilder.fromUriString(BASE_URL + "/v1/prices/cheap")
                .queryParam("origin", origin)
                .queryParam("destination", destination)
                .queryParam("depart_date", departDate)
                .queryParam("currency", currency)
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Access-Token", apiToken);

        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                url, HttpMethod.GET, new HttpEntity<>(headers),
                new org.springframework.core.ParameterizedTypeReference<>() {});

        return parseResponse(response.getBody(), origin, destination, currency);
    }

    private List<FlightDTO> parseResponse(Map<String, Object> body, String origin,
                                           String destination, String currency) {
        List<FlightDTO> flights = new ArrayList<>();
        if (body == null || !Boolean.TRUE.equals(body.get("success"))) return flights;

        if (!(body.get("data") instanceof Map<?, ?> data)) return flights;

        for (Map.Entry<?, ?> entry : data.entrySet()) {
            if (!(entry.getValue() instanceof Map<?, ?> details)) continue;

            flights.add(FlightDTO.builder()
                    .departureAirport(origin)
                    .arrivalAirport(destination)
                    .airline(str(details.get("airline")))
                    .flightNumber(str(details.get("flight_number")))
                    .departureTime(str(details.get("departure_at")))
                    .stops(toInt(details.get("transfers")))
                    .price(toDouble(details.get("price")))
                    .currency(currency)
                    .expiresAt(str(details.get("expires_at")))
                    .build());
        }
        return flights;
    }

    private String str(Object val) {
        return val == null ? "" : String.valueOf(val);
    }

    private Double toDouble(Object val) {
        if (val == null) return 0.0;
        return ((Number) val).doubleValue();
    }

    private Integer toInt(Object val) {
        if (val == null) return 0;
        return ((Number) val).intValue();
    }
}
