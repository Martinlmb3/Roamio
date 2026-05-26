package com.roamio.api.scoring.service;

import com.roamio.api.flight.dto.FlightDTO;
import com.roamio.api.scoring.util.NormalizationUtil;
import java.util.List;

public class PriceScoreService {

    public void calculatePricesScore(List<FlightDTO> flights) {

        double minPrice = flights.stream()
                .mapToDouble(FlightDTO::getPrice)
                .min()
                .orElse(0);

        double maxPrice = flights.stream()
                .mapToDouble(FlightDTO::getPrice)
                .max()
                .orElse(0);

        flights.forEach(flight -> {
            double score = NormalizationUtil.normalize(
                    flight.getPrice(),
                    minPrice,
                    maxPrice);

            flight.setPriceScore(score);
        });
    }
}
