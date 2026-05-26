package com.roamio.api.flight.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FlightDTO {

    // From Travelpayouts
    private String  airline;
    private String  flightNumber;
    private String  departureAirport;
    private String  arrivalAirport;
    private String  departureTime;
    private Integer stops;
    private Double  price;
    private String  currency;
    private String  expiresAt;

    // From Carbon Interface
    private Double co2;         // kg per passenger
    private Double distanceKm;

    // Scoring (set by scoring services)
    private Double priceScore;  // 0–100
    private Double ecoScore;    // 0–100
    private Double finalScore;  // 0–100
}
