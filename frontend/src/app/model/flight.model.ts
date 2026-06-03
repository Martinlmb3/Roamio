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

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departDate: string;
  currency?: string;
  passengers?: number;
  w1?: number;
  w2?: number;
}
