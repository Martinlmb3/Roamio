import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { LucideSprout } from '@lucide/angular';
import { FlightService } from '../../services/flight.service';
import { FlightResult } from '../../model/flight.model';

@Component({
  selector: 'app-flight-search-results',
  standalone: true,
  imports: [CommonModule, Header, Footer, LucideSprout],
  templateUrl: './flight-search-results.html',
  styleUrl: './flight-search-results.css'
})
export class FlightSearchResults implements OnInit {
  private route = inject(ActivatedRoute);
  private flightService = inject(FlightService);

  activeSortTab: 'best' | 'cheapest' | 'greenest' = 'greenest';
  flights: FlightResult[] = [];
  loading = true;
  errorMsg = '';

  ngOnInit() {
    const flightData = this.route.snapshot.queryParams;
    const origin      = flightData['origin']      ?? '';
    const destination = flightData['destination'] ?? '';
    const departDate  = flightData['departDate']  ?? '';

    if (!origin || !destination || !departDate) {
      this.errorMsg = 'Missing search parameters.';
      this.loading = false;
      return;
    }

    this.flightService.search({ origin, destination, departDate }).subscribe({
      next: (data) => { this.flights = data; this.loading = false; },
      error: () => { this.errorMsg = 'Failed to load flights.'; this.loading = false; }
    });
  }

  get sortedFlights(): FlightResult[] {
    if (this.activeSortTab === 'cheapest') return [...this.flights].sort((a, b) => a.price - b.price);
    if (this.activeSortTab === 'greenest') return [...this.flights].sort((a, b) => (b.ecoScore ?? 0) - (a.ecoScore ?? 0));
    return [...this.flights].sort((a, b) => (b.finalScore ?? 0) - (a.finalScore ?? 0));
  }

  setSort(tab: 'best' | 'cheapest' | 'greenest') { this.activeSortTab = tab; }

  formatCo2(kg: number | null): string {
    return kg != null ? `${Math.round(kg)} kg CO₂e` : '–';
  }

  formatStops(stops: number): string {
    return stops === 0 ? 'Direct' : `${stops} stop${stops > 1 ? 's' : ''}`;
  }
}
