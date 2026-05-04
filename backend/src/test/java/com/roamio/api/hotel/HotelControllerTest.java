package com.roamio.api.hotel;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class HotelControllerTest {

    @Test
    void shouldReturnHotelWhenFound() {}

    @Test
    void shouldReturn404WhenHotelNotFound() {}

    @Test
    void shouldReturnHotelSearchResults() {}

    @Test
    void shouldReturn400OnMissingLocation() {}
}
