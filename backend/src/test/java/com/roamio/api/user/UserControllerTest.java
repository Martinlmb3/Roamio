package com.roamio.api.user;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @Test
    void shouldRegisterUserAndReturn201() {}

    @Test
    void shouldReturn409WhenEmailTaken() {}

    @Test
    void shouldLoginAndReturnJwt() {}

    @Test
    void shouldReturn401OnInvalidCredentials() {}

    @Test
    void shouldReturn200OnEmailVerification() {}
}
