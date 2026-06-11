import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { LucideSprout } from '@lucide/angular';
import { FlightService } from '../../services/flight.service';
import { FlightResult, FlightViewModel } from '../../model/flight.model';

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
  activeEmission = 2;
  activeChips: { id: string; label: string }[] = [];
  loading = true;
  errorMsg = '';

  origin = '';
  destination = '';
  departDate = '';
  returnDate = '';
  tripType: 'round-trip' | 'one-way' = 'round-trip';
  passengers = 1;
  cabinClass = 'economy';

  tripTypeOpen = false;
  passengersOpen = false;
  cabinClassOpen = false;

  @HostListener('document:click')
  closeDropdowns(): void {
    this.tripTypeOpen = false;
    this.passengersOpen = false;
    this.cabinClassOpen = false;
  }

  get tripTypeLabel(): string {
    return this.tripType === 'round-trip' ? 'Round trip' : 'One way';
  }

  get cabinLabel(): string {
    const map: Record<string, string> = {
      'economy': 'Economy',
      'premium-economy': 'Premium Economy',
      'business': 'Business',
      'first': 'First'
    };
    return map[this.cabinClass] ?? 'Economy';
  }

  setTripType(type: 'round-trip' | 'one-way'): void { this.tripType = type; this.tripTypeOpen = false; }
  setPassengers(p: number): void { this.passengers = p; this.passengersOpen = false; }
  setCabinClass(cls: string): void { this.cabinClass = cls; this.cabinClassOpen = false; }

  private viewFlights: FlightViewModel[] = [];

  ngOnInit() {
    const p = this.route.snapshot.queryParams;
    this.origin      = p['origin']      ?? '';
    this.destination = p['destination'] ?? '';
    this.departDate  = p['departDate']  ?? '';
    this.returnDate  = p['returnDate']  ?? '';
    this.tripType    = (p['tripType'] as 'round-trip' | 'one-way') ?? 'round-trip';
    this.passengers  = Number(p['passengers']) || 1;
    this.cabinClass  = p['cabinClass'] ?? 'economy';

    const origin      = this.origin;
    const destination = this.destination;
    const departDate  = this.departDate;

    if (!origin || !destination || !departDate) {
      this.errorMsg = 'Missing search parameters.';
      this.loading = false;
      return;
    }

    const returnDate = this.returnDate || undefined;
    this.flightService.search({ origin, destination, departDate, returnDate, passengers: this.passengers }).subscribe({
      next: (data) => { this.viewFlights = data.map(f => this.mapFlight(f)); this.loading = false; },
      error: () => { this.errorMsg = 'Failed to load flights.'; this.loading = false; }
    });
  }

  private get sorted(): FlightViewModel[] {
    if (this.activeSortTab === 'cheapest') return [...this.viewFlights].sort((a, b) => a.price - b.price);
    if (this.activeSortTab === 'greenest') return [...this.viewFlights].sort((a, b) => b._ecoScore - a._ecoScore);
    return [...this.viewFlights].sort((a, b) => b._finalScore - a._finalScore);
  }

  get topFlights(): FlightViewModel[] { return this.sorted.slice(0, 3); }
  get otherFlights(): FlightViewModel[] { return this.sorted.slice(3); }

  setSort(tab: 'best' | 'cheapest' | 'greenest'): void { this.activeSortTab = tab; }
  setEmission(n: number): void { this.activeEmission = n; }
  removeChip(id: string): void { this.activeChips = this.activeChips.filter(c => c.id !== id); }

  private mapFlight(f: FlightResult): FlightViewModel {
    const depTime = f.departureTime
      ? new Date(f.departureTime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
      : '--:--';
    const co2kg = f.co2 ?? null;
    const co2Str = co2kg != null ? `${Math.round(co2kg)} kg CO₂e` : '–';
    const co2Class: 'good' | 'avg' | 'bad' = co2kg == null ? 'avg' : co2kg < 150 ? 'good' : co2kg > 250 ? 'bad' : 'avg';
    const score = Math.round((f.finalScore ?? 0) * 10) / 10;

    return {
      airlineCode: (f.airline ?? 'XX').slice(0, 2).toLowerCase(),
      airlineName: f.airline ?? 'Unknown',
      flightNumber: f.flightNumber ?? '',
      aircraft: '',
      dep: { time: depTime, airport: f.departureAirport ?? '' },
      arr: { time: '--:--', airport: f.arrivalAirport ?? '' },
      duration: '--',
      stops: f.stops === 0 ? 'Direct' : `${f.stops} stop${f.stops > 1 ? 's' : ''}`,
      stopsClass: f.stops === 0 ? 'direct' : 'stop',
      roamioScore: score,
      roamioStyle: score >= 75 ? 'good' : 'mid',
      co2: co2Str,
      co2Class,
      extras: [],
      price: f.price ?? 0,
      _ecoScore: f.ecoScore ?? 0,
      _finalScore: f.finalScore ?? 0,
    };
  }
}
