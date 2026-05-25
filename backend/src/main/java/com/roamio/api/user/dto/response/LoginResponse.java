package com.roamio.api.user.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// Tokens are set as HttpOnly cookies by the controller — not returned in the body.
// This body carries only the user info the frontend needs to render the UI.
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String membershipLevel;
}
