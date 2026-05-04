package com.roamio.api.integration;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class HotelBookingFlowTest {

    @Test
    void shouldSearchHotelsAndReturnResults() {}

    @Test
    void shouldSelectRoomAndBookHotel() {}

    @Test
    void shouldCalculateNightsCorrectly() {}

    @Test
    void shouldAppearInUserBookingsAfterConfirmation() {}
}
