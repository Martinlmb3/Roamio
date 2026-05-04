package com.roamio.api.country.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "country")
public class Country {

    @Id
    @Column(length = 2)
    private String code;

    @Column(nullable = false)
    private String name;

    private String region;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "flag_emoji")
    private String flagEmoji;

    @Column(name = "phone_prefix")
    private String phonePrefix;
}
