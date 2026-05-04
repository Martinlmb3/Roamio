package com.roamio.api.airport.model;

import com.roamio.api.country.model.Country;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "airport")
public class Airport {

    @Id
    @Column(name = "iata_code", length = 3)
    private String iataCode;

    @Column(name = "country_code", nullable = false, length = 2)
    private String countryCode;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String city;

    private String timezone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_code", insertable = false, updatable = false)
    private Country country;
}
