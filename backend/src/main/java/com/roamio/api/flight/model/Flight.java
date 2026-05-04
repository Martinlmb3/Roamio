package com.roamio.api.flight.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "flight")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String airline;

    @Column(name = "logo_url")
    private String logoUrl;

    @Column(name = "departure_airport", nullable = false)
    private String departureAirport;

    @Column(name = "departure_time", nullable = false)
    private LocalDateTime departureTime;

    @Column(name = "arrival_airport", nullable = false)
    private String arrivalAirport;

    @Column(name = "arrival_time", nullable = false)
    private LocalDateTime arrivalTime;

    private String duration;

    private Integer stops;

    @Column(name = "base_price", precision = 10, scale = 2)
    private BigDecimal basePrice;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "amadeus_offer_id")
    private String amadeusOfferId;

    @Column(name = "flight_number")
    private String flightNumber;

    @Column(name = "available_seats")
    private Integer availableSeats;

    private String currency;

    @Enumerated(EnumType.STRING)
    @Column(name = "cabin_class")
    private CabinClass cabinClass;

    public enum CabinClass {
        ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST
    }
}
