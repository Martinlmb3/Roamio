package com.roamio.api.security;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class JwtAuthFilterTest {

    @Test
    void shouldAuthenticateRequestWithValidToken() {}

    @Test
    void shouldSkipFilterWhenNoAuthHeader() {}

    @Test
    void shouldRejectRequestWithExpiredToken() {}

    @Test
    void shouldRejectRequestWithMalformedToken() {}
}
