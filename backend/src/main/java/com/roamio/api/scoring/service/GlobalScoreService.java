package com.roamio.api.scoring.service;

import com.roamio.api.flight.dto.FlightDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GlobalScoreService {

    private static final double DEFAULT_PRICE_WEIGHT = 0.5;
    private static final double DEFAULT_ECO_WEIGHT   = 0.5;

    public void calculateFinalScores(List<FlightDTO> flights) {
        calculateFinalScores(flights, DEFAULT_PRICE_WEIGHT, DEFAULT_ECO_WEIGHT);
    }

    public void calculateFinalScores(List<FlightDTO> flights, double priceWeight, double ecoWeight) {
        flights.forEach(flight -> {
            double finalScore = priceWeight * flight.getPriceScore()
                              + ecoWeight   * flight.getEcoScore();
            flight.setFinalScore(finalScore);
        });
    }
}
