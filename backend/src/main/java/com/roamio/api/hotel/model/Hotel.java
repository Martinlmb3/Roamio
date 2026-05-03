package com.roamio.api.hotel.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hotel")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String location;

    private Integer stars;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(precision = 3, scale = 1)
    private BigDecimal rating;

    @Column(name = "rating_text")
    private String ratingText;

    @Column(name = "reviews_count")
    private Integer reviewsCount;

    @Column(name = "price_per_night", precision = 10, scale = 2)
    private BigDecimal pricePerNight;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
