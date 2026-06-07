export interface FlightResult {
  airline: string;
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string | null;
  stops: number;
  price: number;
  currency: string;
  co2: number | null;
  distanceKm: number | null;
  priceScore: number;
  ecoScore: number;
  finalScore: number;
}

export interface FlightViewModel {
  airlineCode: string;
  airlineName: string;
  flightNumber: string;
  aircraft: string;
  dep: { time: string; airport: string };
  arr: { time: string; airport: string };
  duration: string;
  stops: string;
  stopsClass: 'direct' | 'stop';
  roamioScore: number;
  roamioStyle: 'good' | 'mid';
  co2: string;
  co2Class: 'good' | 'avg' | 'bad';
  extras: string[];
  price: number;
  _ecoScore: number;
  _finalScore: number;
}

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departDate: string;
  currency?: string;
  passengers?: number;
  w1?: number;
  w2?: number;
}
