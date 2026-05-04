package com.roamio.api.passenger.model;

import com.roamio.api.flightbooking.model.FlightBooking;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "passenger")
public class Passenger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "flight_booking_id", nullable = false)
    private Long flightBookingId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    private String gender;

    @Column(name = "passport_number")
    private String passportNumber;

    @Column(name = "passport_expiry")
    private LocalDate passportExpiry;

    private String nationality;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PassengerType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flight_booking_id", insertable = false, updatable = false)
    private FlightBooking flightBooking;

    public enum PassengerType {
        ADULT, CHILD, INFANT
    }
}
