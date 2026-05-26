package com.roamio.api.flight.client;

import com.roamio.api.flight.dto.CarbonEstimate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Component
public class CarbonInterfaceClient {

    @Value("${carboninterface.api-key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private static final String BASE_URL = "https://www.carboninterface.com/api/v1";

    public CarbonEstimate estimate(String departure, String arrival, int passengers) {
        Map<String, Object> body = Map.of(
                "type",        "flight",
                "passengers",  passengers,
                "legs",        List.of(Map.of(
                        "departure_airport",   departure,
                        "destination_airport", arrival)),
                "cabin_class", "economy"
        );

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                    BASE_URL + "/estimates",
                    HttpMethod.POST,
                    new HttpEntity<>(body, headers),
                    new ParameterizedTypeReference<>() {});

            return parseCarbonResponse(response.getBody());
        } catch (Exception e) {
            return CarbonEstimate.builder().carbonKg(0.0).distanceKm(0.0).build();
        }
    }

    private CarbonEstimate parseCarbonResponse(Map<String, Object> body) {
        if (body == null) return CarbonEstimate.builder().carbonKg(0.0).distanceKm(0.0).build();

        if (!(body.get("data") instanceof Map<?, ?> data)) {
            return CarbonEstimate.builder().carbonKg(0.0).distanceKm(0.0).build();
        }
        if (!(data.get("attributes") instanceof Map<?, ?> attrs)) {
            return CarbonEstimate.builder().carbonKg(0.0).distanceKm(0.0).build();
        }

        return CarbonEstimate.builder()
                .carbonKg(((Number) attrs.get("carbon_kg")).doubleValue())
                .distanceKm(((Number) attrs.get("distance_value")).doubleValue())
                .build();
    }
}
