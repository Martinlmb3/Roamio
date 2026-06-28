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

  filterStops: number[] = [];
  filterAirlines: string[] = [];
  maxPrice = 9999;
  priceMin = 0;
  priceMax = 9999;

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
      next: (data) => {
        this.viewFlights = data.map(f => this.mapFlight(f));
        if (this.viewFlights.length > 0) {
          const prices = this.viewFlights.map(f => f.price);
          this.priceMin = Math.min(...prices);
          this.priceMax = Math.max(...prices);
          this.maxPrice = this.priceMax;
        }
        this.loading = false;
      },
      error: () => { this.errorMsg = 'Failed to load flights.'; this.loading = false; }
    });
  }

  // ── Sidebar filter helpers ────────────────────────────────────────

  get availableAirlines(): string[] {
    return [...new Set(this.viewFlights.map(f => f.airlineName))].sort();
  }

  stopsCount(n: number): number {
    return this.viewFlights.filter(f => n >= 2 ? f._stops >= 2 : f._stops === n).length;
  }

  airlineCount(airline: string): number {
    return this.viewFlights.filter(f => f.airlineName === airline).length;
  }

  toggleStopFilter(n: number): void {
    this.filterStops = this.filterStops.includes(n)
      ? this.filterStops.filter(s => s !== n)
      : [...this.filterStops, n];
  }

  toggleAirlineFilter(airline: string): void {
    this.filterAirlines = this.filterAirlines.includes(airline)
      ? this.filterAirlines.filter(a => a !== airline)
      : [...this.filterAirlines, airline];
  }

  setMaxPrice(value: string): void {
    this.maxPrice = Number(value);
  }

  resetFilters(): void {
    this.filterStops = [];
    this.filterAirlines = [];
    this.maxPrice = this.priceMax;
    this.activeEmission = 2;
  }

  get hasActiveFilters(): boolean {
    return this.filterStops.length > 0
      || this.filterAirlines.length > 0
      || this.maxPrice < this.priceMax
      || this.activeEmission < 2;
  }

  // ── Filtering & sorting ───────────────────────────────────────────

  private get avgCo2(): number {
    const vals = this.viewFlights.filter(f => f._co2 != null).map(f => f._co2!);
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  }

  private get filtered(): FlightViewModel[] {
    const avg = this.activeEmission < 2 ? this.avgCo2 : 0;
    return this.viewFlights.filter(f => {
      if (this.filterStops.length > 0) {
        const bucket = f._stops >= 2 ? 2 : f._stops;
        if (!this.filterStops.includes(bucket)) return false;
      }
      if (this.filterAirlines.length > 0 && !this.filterAirlines.includes(f.airlineName)) return false;
      if (f.price > this.maxPrice) return false;
      if (this.activeEmission === 0 && (f._co2 == null || f._co2 >= avg * 0.8)) return false;
      if (this.activeEmission === 1 && (f._co2 == null || f._co2 >= avg)) return false;
      return true;
    });
  }

  private get sorted(): FlightViewModel[] {
    const f = this.filtered;
    if (this.activeSortTab === 'cheapest') return [...f].sort((a, b) => a.price - b.price);
    if (this.activeSortTab === 'greenest') return [...f].sort((a, b) => b._ecoScore - a._ecoScore);
    return [...f].sort((a, b) => b._finalScore - a._finalScore);
  }

  get topFlights(): FlightViewModel[] { return this.sorted.slice(0, 3); }
  get otherFlights(): FlightViewModel[] { return this.sorted.slice(3); }
  get filteredCount(): number { return this.filtered.length; }
  get totalCount(): number { return this.viewFlights.length; }

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
      _stops: f.stops ?? 0,
      _co2: co2kg,
      _ecoScore: f.ecoScore ?? 0,
      _finalScore: f.finalScore ?? 0,
    };
  }
}
