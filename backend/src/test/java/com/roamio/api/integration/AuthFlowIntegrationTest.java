package com.roamio.api.integration;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AuthFlowIntegrationTest {

    @Test
    void shouldRegisterVerifyAndLogin() {}

    @Test
    void shouldReceiveJwtAfterLogin() {}

    @Test
    void shouldRefreshTokenAndGetNewJwt() {}

    @Test
    void shouldRevokeRefreshTokenOnLogout() {}
}
