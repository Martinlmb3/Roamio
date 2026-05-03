package com.roamio.api.userpreferences.model;

import com.roamio.api.user.model.User;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_preferences")
public class UserPreferences {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "promotional_emails")
    private boolean promotionalEmails;

    @Column(name = "booking_alerts")
    private boolean bookingAlerts;

    @Column(name = "partner_offers")
    private boolean partnerOffers;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;
}
