package com.roamio.api.scoring.service;

import com.roamio.api.flight.dto.FlightDTO;
import com.roamio.api.scoring.util.NormalizationUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EcoScoreService {

    public void calculateEcoScore(List<FlightDTO> flights) {

        double minCo2 = flights.stream()
                .mapToDouble(FlightDTO::getCo2)
                .min()
                .orElse(0);

        double maxCo2 = flights.stream()
                .mapToDouble(FlightDTO::getCo2)
                .max()
                .orElse(0);

        flights.forEach(flight -> {
            double score = NormalizationUtil.normalize(flight.getCo2(), minCo2, maxCo2);
            flight.setEcoScore(score);
        });
    }
}
