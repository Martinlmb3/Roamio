package com.roamio.api.user.controller;

import com.roamio.api.configuration.JwtUtils;
import com.roamio.api.user.dto.request.LoginRequest;
import com.roamio.api.user.dto.request.SignupRequest;
import com.roamio.api.user.dto.response.UserMeResponse;
import com.roamio.api.user.model.User;
import com.roamio.api.user.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Arrays;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/signup")
    ResponseEntity<Void> signup(@Valid @RequestBody SignupRequest request,
            HttpServletResponse response) {

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
        addTokenCookies(response, newUser);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/login")
    ResponseEntity<Void> login(@Valid @RequestBody LoginRequest request,
            HttpServletResponse response) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        User user = userRepository.findByEmail(request.getEmail());
        addTokenCookies(response, user);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/me")
    public ResponseEntity<UserMeResponse> me(Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String email = authentication.getName();
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        UserMeResponse body = UserMeResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole().name())
                .build();

        return ResponseEntity.ok(body);
    }

    @PostMapping("/refresh")
    ResponseEntity<Void> refresh(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = extractCookieValue(request, "refresh_token");

        if (refreshToken == null || jwtUtils.isTokenExpired(refreshToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Long userId = Long.valueOf(jwtUtils.extractSubject(refreshToken));
        User user = userRepository.findById(userId).orElse(null);
        if (user == null)
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();

        String newAccessToken = jwtUtils.generateToken(user.getId(), user.getRole());
        response.addHeader("Set-Cookie", buildCookie("access_token", newAccessToken, 15 * 60, "/"));

        return ResponseEntity.ok().build();
    }

    @PostMapping("/logout")
    ResponseEntity<Void> logout(HttpServletResponse response) {
        response.addHeader("Set-Cookie", buildCookie("access_token", "", 0, "/"));
        response.addHeader("Set-Cookie", buildCookie("refresh_token", "", 0, "/api/auth/refresh"));
        return ResponseEntity.noContent().build();
    }

    private void addTokenCookies(HttpServletResponse response, User user) {
        String accessToken = jwtUtils.generateToken(user.getId(), user.getRole());
        String refreshToken = jwtUtils.generateRefreshToken(user.getId());

        response.addHeader("Set-Cookie", buildCookie("access_token", accessToken, 15 * 60, "/"));
        response.addHeader("Set-Cookie",
                buildCookie("refresh_token", refreshToken, 7 * 24 * 60 * 60, "/api/auth/refresh"));
    }

    private String buildCookie(String name, String value, long maxAgeSeconds, String path) {
        return ResponseCookie.from(name, value)
                .httpOnly(true)
                .secure(false)
                .path(path)
                .maxAge(maxAgeSeconds)
                .sameSite("Strict")
                .build()
                .toString();
    }

    private String extractCookieValue(HttpServletRequest request, String name) {
        if (request.getCookies() == null)
            return null;
        return Arrays.stream(request.getCookies())
                .filter(c -> name.equals(c.getName()))
                .map(Cookie::getValue)
                .findFirst()
                .orElse(null);
    }
}
