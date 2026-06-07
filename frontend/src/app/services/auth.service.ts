import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest, SignupRequest, UserMe } from '../model/user.model';
import { environment } from '../../environments/environment';

const AUTH_API_URL = `${environment.apiUrl}/api/auth`;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  currentUser$ = new BehaviorSubject<UserMe | null>(null);

  signup(body: SignupRequest): Observable<void> {
    return this.http.post<void>(`${AUTH_API_URL}/signup`, body, { withCredentials: true }).pipe(
      tap(() => this.fetchMe())
    );
  }

  login(body: LoginRequest): Observable<void> {
    return this.http.post<void>(`${AUTH_API_URL}/login`, body, { withCredentials: true }).pipe(
      tap(() => this.fetchMe())
    );
  }

  me(): Observable<UserMe> {
    return this.http.get<UserMe>(`${AUTH_API_URL}/me`, { withCredentials: true }).pipe(
      tap(user => this.currentUser$.next(user))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${AUTH_API_URL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.currentUser$.next(null))
    );
  }

  fetchMe(): void {
    this.me().subscribe({ error: () => this.currentUser$.next(null) });
  }
}
