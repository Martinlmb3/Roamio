package com.roamio.api.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roamio.api.configuration.JwtUtils;
import com.roamio.api.user.dto.response.LoginResponse;
import com.roamio.api.user.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;

    @PostMapping("signup")
    public ReponseEntity<LoginResponse>signup(@Valid @RequestBody <SignupRequest> signupRequest) {
        if (authtentication.isAuthenticated()) {
            //TODO: process POST request
        }
        
        return entity;
    }

    @PostMapping("login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody <LoginRequest> loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtUtils, authenticationManager))
            if(authentication.isAuthenticated()){
                LoginResponse loginResponse;
                loginResponse.token;
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
        
        return entity;
    }

    @GetMapping("me")
    public ResponseEntity<AuthResponse> sendUserDetails(){
        #Appeler 
    }

    @GetMapping("refresh")
    public ResponseEntity<AuthResponse> resendJwtToken(){
        #Appeler 
    }

    @GetMapping("logout")
    public String logout(@RequestParam String param) {
        return new String();
    }

}
