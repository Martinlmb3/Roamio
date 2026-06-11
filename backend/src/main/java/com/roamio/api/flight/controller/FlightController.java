package com.roamio.api.flight.controller;

import com.roamio.api.flight.dto.FlightDTO;
import com.roamio.api.flight.service.FlightSearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/flights")
@RequiredArgsConstructor
public class FlightController {

    private final FlightSearchService flightSearchService;

    @GetMapping("/search")
    ResponseEntity<List<FlightDTO>> search(
            @RequestParam String origin,
            @RequestParam String destination,
            @RequestParam String departDate,
            @RequestParam(required = false) String returnDate,
            @RequestParam(defaultValue = "EUR") String currency,
            @RequestParam(defaultValue = "1")   int passengers,
            @RequestParam(defaultValue = "0.5") double w1,
            @RequestParam(defaultValue = "0.5") double w2) {

        List<FlightDTO> results = flightSearchService.search(
                origin, destination, departDate, returnDate, currency, passengers, w1, w2);

        return ResponseEntity.ok(results);
    }
}
