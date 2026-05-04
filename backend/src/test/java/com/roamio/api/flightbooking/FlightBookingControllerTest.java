package com.roamio.api.flightbooking;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class FlightBookingControllerTest {

    @Test
    void shouldCreateFlightBookingAndReturn201() {}

    @Test
    void shouldReturn404WhenFlightNotFound() {}

    @Test
    void shouldReturn401WhenUnauthenticated() {}

    @Test
    void shouldReturn400OnInvalidBookingRequest() {}
}
