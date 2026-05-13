import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { LucideSprout } from '@lucide/angular';

interface Flight {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
  aircraft: string;
  dep: { time: string; airport: string };
  arr: { time: string; airport: string };
  duration: string;
  stops: string;
  stopsClass: 'direct' | 'stop';
  layover?: string;
  price: number;
  roamioScore: number;
  roamioStyle: 'high' | 'mid';
  co2: string;
  co2Class: 'good' | 'bad' | 'mid';
  extras: string[];
  isTop: boolean;
}

@Component({
  selector: 'app-flight-search-results',
  imports: [Header, Footer, LucideSprout],
  templateUrl: './flight-search-results.html',
  styleUrl: './flight-search-results.css',
  standalone: true
})
export class FlightSearchResults {
  activeSortTab: 'best' | 'cheapest' | 'greenest' = 'greenest';
  activeEmission = 0;
  activeChips = [
    { id: 0, label: 'Stops: Direct' },
    { id: 1, label: 'Airline: British Airways' },
    { id: 2, label: 'Emissions: Lowest only' },
  ];
  checkedStops   = new Set(['Direct']);
  checkedAirlines = new Set(['British Airways']);

  flights: Flight[] = [
    {
      airlineCode: 'ba', airlineName: 'British Airways', flightNumber: 'BA 178', aircraft: 'Airbus A350-1000',
      dep: { time: '10:30', airport: 'LHR' }, arr: { time: '13:45', airport: 'JFK' },
      duration: '8h 15m', stops: 'Direct', stopsClass: 'direct',
      price: 589, roamioScore: 91.5, roamioStyle: 'high',
      co2: '142 kg CO₂e · −21% vs avg', co2Class: 'good',
      extras: ['Carry-on included', 'Free changes'], isTop: true,
    },
    {
      airlineCode: 'va', airlineName: 'Virgin Atlantic', flightNumber: 'VS 003', aircraft: 'Boeing 787-9',
      dep: { time: '09:15', airport: 'LGW' }, arr: { time: '12:40', airport: 'JFK' },
      duration: '8h 25m', stops: 'Direct', stopsClass: 'direct',
      price: 615, roamioScore: 86.2, roamioStyle: 'high',
      co2: '156 kg CO₂e · −13% vs avg', co2Class: 'good',
      extras: ['Carry-on included'], isTop: false,
    },
    {
      airlineCode: 'aa', airlineName: 'American Airlines', flightNumber: 'AA 107', aircraft: 'Layover 1h 50m at DUB',
      dep: { time: '11:00', airport: 'LHR' }, arr: { time: '18:30', airport: 'JFK' },
      duration: '10h 30m', stops: '1 stop · DUB', stopsClass: 'stop',
      price: 520, roamioScore: 62.0, roamioStyle: 'mid',
      co2: '228 kg CO₂e · +27% vs avg', co2Class: 'bad',
      extras: ['Bag extra'], isTop: false,
    },
    {
      airlineCode: 'dl', airlineName: 'Delta', flightNumber: 'DL 002', aircraft: 'Airbus A330-900neo',
      dep: { time: '14:20', airport: 'LHR' }, arr: { time: '18:00', airport: 'JFK' },
      duration: '8h 40m', stops: 'Direct', stopsClass: 'direct',
      price: 642, roamioScore: 82.4, roamioStyle: 'high',
      co2: '174 kg CO₂e · −3% vs avg', co2Class: 'mid',
      extras: ['Carry-on included', 'Free changes'], isTop: false,
    },
    {
      airlineCode: 'af', airlineName: 'Air France', flightNumber: 'AF 1281 + AF 022', aircraft: 'Layover 2h 10m at CDG',
      dep: { time: '06:50', airport: 'LHR' }, arr: { time: '13:45', airport: 'JFK' },
      duration: '11h 55m', stops: '1 stop · CDG', stopsClass: 'stop',
      price: 478, roamioScore: 71.8, roamioStyle: 'mid',
      co2: '205 kg CO₂e · +14% vs avg', co2Class: 'bad',
      extras: ['Carry-on included'], isTop: false,
    },
    {
      airlineCode: 'tt', airlineName: 'TAP Air', flightNumber: 'TP 1357', aircraft: 'Airbus A321LR',
      dep: { time: '19:40', airport: 'LHR' }, arr: { time: '22:45', airport: 'EWR' },
      duration: '9h 05m', stops: 'Direct', stopsClass: 'direct',
      price: 534, roamioScore: 88.9, roamioStyle: 'high',
      co2: '148 kg CO₂e · −17% vs avg', co2Class: 'good',
      extras: ['Carry-on included'], isTop: false,
    },
  ];

  get topFlights() { return this.flights.filter(f => f.isTop); }
  get otherFlights() { return this.flights.filter(f => !f.isTop); }

  setSort(tab: 'best' | 'cheapest' | 'greenest') { this.activeSortTab = tab; }
  setEmission(i: number) { this.activeEmission = i; }
  removeChip(id: number) { this.activeChips = this.activeChips.filter(c => c.id !== id); }

  toggleStop(val: string) {
    this.checkedStops.has(val) ? this.checkedStops.delete(val) : this.checkedStops.add(val);
  }
  toggleAirline(val: string) {
    this.checkedAirlines.has(val) ? this.checkedAirlines.delete(val) : this.checkedAirlines.add(val);
  }
}
