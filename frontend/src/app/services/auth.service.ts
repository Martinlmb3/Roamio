import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, SignupRequest, UserMe } from '../model/user.model';
import { environment } from '../../environments/environment';

const AUTH_API_URL = `${environment.apiUrl}/api/auth`;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  signup(body: SignupRequest): Observable<void> {
    return this.http.post<void>(`${AUTH_API_URL}/signup`, body, { withCredentials: true });
  }

  login(body: LoginRequest): Observable<void> {
    return this.http.post<void>(`${AUTH_API_URL}/login`, body, { withCredentials: true });
  }

  me(): Observable<UserMe> {
    return this.http.get<UserMe>(`${AUTH_API_URL}/me`, { withCredentials: true });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${AUTH_API_URL}/logout`, {}, { withCredentials: true });
  }
}
