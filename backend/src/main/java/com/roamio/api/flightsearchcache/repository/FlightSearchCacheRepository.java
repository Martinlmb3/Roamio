package com.roamio.api.flightsearchcache.repository;

import com.roamio.api.flightsearchcache.model.FlightSearchCache;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FlightSearchCacheRepository extends JpaRepository<FlightSearchCache, Long> {
    Optional<FlightSearchCache> findBySearchHash(String searchHash);
}
