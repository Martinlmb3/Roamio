package com.roamio.api.user.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserMeResponse {
    Long id;
    String firstName;
    String lastName;
    String email;
    String role;
}
