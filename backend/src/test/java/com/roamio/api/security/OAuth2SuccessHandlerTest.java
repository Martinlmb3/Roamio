package com.roamio.api.security;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class OAuth2SuccessHandlerTest {

    @Test
    void shouldIssueJwtOnSuccessfulGoogleLogin() {}

    @Test
    void shouldCreateUserOnFirstGoogleLogin() {}

    @Test
    void shouldLinkOAuthAccountToExistingUser() {}

    @Test
    void shouldRedirectWithTokenAfterSuccess() {}
}
