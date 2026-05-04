package com.roamio.api.user;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Test
    void shouldRegisterNewUser() {}

    @Test
    void shouldThrowWhenEmailAlreadyExists() {}

    @Test
    void shouldVerifyEmailWithValidToken() {}

    @Test
    void shouldThrowWhenVerificationTokenExpired() {}

    @Test
    void shouldFindUserByEmail() {}

    @Test
    void shouldUpdateUserProfile() {}
}
