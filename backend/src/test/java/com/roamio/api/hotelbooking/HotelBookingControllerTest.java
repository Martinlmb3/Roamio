package com.roamio.api.hotelbooking;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class HotelBookingControllerTest {

    @Test
    void shouldCreateHotelBookingAndReturn201() {}

    @Test
    void shouldReturn404WhenHotelNotFound() {}

    @Test
    void shouldReturn401WhenUnauthenticated() {}

    @Test
    void shouldReturn400OnInvalidDates() {}
}
