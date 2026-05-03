package com.roamio.api.farefeature.model;

import com.roamio.api.fareoption.model.FareOption;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "fare_feature")
public class FareFeature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fare_option_id", nullable = false)
    private Long fareOptionId;

    @Column(nullable = false)
    private String text;

    private boolean included;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fare_option_id", insertable = false, updatable = false)
    private FareOption fareOption;
}
