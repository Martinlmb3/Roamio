package com.roamio.api.flightsearchcache;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class FlightSearchCacheServiceTest {

    @Test
    void shouldReturnCachedResultsOnCacheHit() {}

    @Test
    void shouldCallAmadeusAndCacheOnCacheMiss() {}

    @Test
    void shouldGenerateDeterministicSearchHash() {}

    @Test
    void shouldExpireStaleCache() {}
}
