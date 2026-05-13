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

    private Integer stops;

    @Column(name = "base_price", precision = 10, scale = 2)
    private BigDecimal basePrice;

    private String currency;

    @Column(name = "flight_number")
    private String flightNumber;

    @Column(name = "tp_cache_key")
    private String tpCacheKey;

    @Column(name = "expires_at")
    private LocalDateTime expiresAt;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
