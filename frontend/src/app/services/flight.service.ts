import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightResult, FlightSearchParams } from '../model/flight.model';

const API_URL=`http://localhost:8080/api/flights`;

@Injectable({ providedIn: 'root' })
export class FlightService {
  private http = inject(HttpClient);

  search(params: FlightSearchParams): Observable<FlightResult[]> {
    return this.http.get<FlightResult[]>(`${API_URL}/search`, {
      params: { ...params },
      withCredentials: true
    });
  }
}
