import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {
  private router = inject(Router);
  auth = inject(AuthService);

  user$ = this.auth.currentUser$;

  navigateToHome(): void { this.router.navigate(['/home']); }
  navigateToFlights(): void { this.router.navigate(['/flight-search-results']); }
  navigateToStays(): void { this.router.navigate(['/hotel-search-results']); }
  navigateToDeals(): void { this.router.navigate(['/deals']); }
  navigateToMyTrips(): void { this.router.navigate(['/my-trips']); }
  navigateToLogin(): void { this.router.navigate(['/login']); }
  navigateToSignUp(): void { this.router.navigate(['/signup']); }
  navigateToDashboard(): void { this.router.navigate(['/dashboard']); }
  navigateToProfile(): void { this.router.navigate(['/profile']); }

  logout(): void {
    this.auth.logout().subscribe(() => this.router.navigate(['/home']));
  }
}
