import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {
  private router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToFlights(): void {
    this.router.navigate(['/flight-search-results']);
  }

  navigateToStays(): void {
    this.router.navigate(['/hotel-search-results']);
  }

  navigateToDeals(): void {
    this.router.navigate(['/deals']);
  }

  navigateToMyTrips(): void {
    this.router.navigate(['/my-trips']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
