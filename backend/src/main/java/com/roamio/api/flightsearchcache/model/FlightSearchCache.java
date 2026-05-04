package com.roamio.api.flightsearchcache.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "flight_search_cache")
public class FlightSearchCache {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "search_hash", nullable = false, unique = true)
    private String searchHash;

    @Column(length = 3, nullable = false)
    private String origin;

    @Column(length = 3, nullable = false)
    private String destination;

    @Column(name = "departure_date", nullable = false)
    private LocalDate departureDate;

    @Column(nullable = false)
    private Integer adults;

    @Column(name = "results_json", columnDefinition = "TEXT")
    private String resultsJson;
}
