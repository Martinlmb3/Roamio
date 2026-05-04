package com.roamio.api.security;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class JwtServiceTest {

    @Test
    void shouldGenerateToken() {}

    @Test
    void shouldExtractUsernameFromToken() {}

    @Test
    void shouldReturnTrueForValidToken() {}

    @Test
    void shouldReturnFalseForExpiredToken() {}

    @Test
    void shouldReturnFalseForTamperedToken() {}
}
