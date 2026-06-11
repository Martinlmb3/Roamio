import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FlightResult, FlightSearchParams } from '../model/flight.model';

const API_URL = `${environment.apiUrl}/api/flights`;

@Injectable({ providedIn: 'root' })
export class FlightService {
  private http = inject(HttpClient);

  search(params: FlightSearchParams): Observable<FlightResult[]> {
    let httpParams = new HttpParams()
      .set('origin', params.origin)
      .set('destination', params.destination)
      .set('departDate', params.departDate);

    if (params.returnDate) httpParams = httpParams.set('returnDate', params.returnDate);
    if (params.passengers != null) httpParams = httpParams.set('passengers', String(params.passengers));
    if (params.currency) httpParams = httpParams.set('currency', params.currency);

    return this.http.get<FlightResult[]>(`${API_URL}/search`, {
      params: httpParams,
      withCredentials: true
    });
  }
}
