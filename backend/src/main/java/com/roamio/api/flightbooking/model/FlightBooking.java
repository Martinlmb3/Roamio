package com.roamio.api.flightbooking.model;

import com.roamio.api.booking.model.Booking;
import com.roamio.api.fareoption.model.FareOption;
import com.roamio.api.flight.model.Flight;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "flight_booking")
public class FlightBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "booking_id", nullable = false)
    private Long bookingId;

    @Column(name = "flight_id", nullable = false)
    private Long flightId;

    @Column(name = "fare_option_id", nullable = false)
    private Long fareOptionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "booking_id", insertable = false, updatable = false)
    private Booking booking;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flight_id", insertable = false, updatable = false)
    private Flight flight;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fare_option_id", insertable = false, updatable = false)
    private FareOption fareOption;
}
