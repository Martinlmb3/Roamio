package com.roamio.api.user.controller;

import com.roamio.api.configuration.JwtUtils;
import com.roamio.api.user.dto.request.LoginRequest;
import com.roamio.api.user.dto.request.SignupRequest;
import com.roamio.api.user.dto.response.LoginResponse;
import com.roamio.api.user.dto.response.SignupResponse;
import com.roamio.api.user.model.User;
import com.roamio.api.user.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/signup")
    ResponseEntity<SignupResponse> signup(@Valid @RequestBody SignupRequest request) {
        if (userRepository.findByEmail(request.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        User newUser = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .role(User.UserRole.USER)
                .authProvider(User.AuthProvider.LOCAL)
                .isActive(true)
                .isEmailVerified(false)
                .joinedAt(LocalDateTime.now())
                .createdAt(LocalDateTime.now())
                .build();

        userRepository.save(newUser);
        String token = jwtUtils.generateToken(newUser.getEmail());
        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(7 * 24 * 60 * 60)
                .sameSite("Strict")
                .build();
    }

    @PostMapping("/login")
    ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        User user = (User) authentication.getPrincipal();

        // TODO: generate access + refresh tokens and set as HttpOnly cookies

        String token = jwtUtils.generateToken(newUser.getEmail());
        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(7 * 24 * 60 * 60)
                .sameSite("Strict")
                .build();

        return ResponseEntity.ok(body);
    }

    @GetMapping("/me")
    ResponseEntity<LoginResponse> me(Authentication authentication) {
        // TODO: extract user from SecurityContext and return profile
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build();
    }

    @PostMapping("/refresh")
    ResponseEntity<LoginResponse> refresh(@RequestBody String refreshToken) {
        // TODO: validate refresh token, issue new access token
        return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).build();
    }

    @PostMapping("/logout")
    ResponseEntity<Void> logout(@RequestBody String refreshToken) {
        // TODO: revoke refresh token in DB
        return ResponseEntity.noContent().build();
    }
}
