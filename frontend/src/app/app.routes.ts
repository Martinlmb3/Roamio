import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup').then(m => m.SignUp)
  },
  {
    path: 'flight-search-results',
    loadComponent: () => import('./pages/flight-search-results/flight-search-results').then(m => m.FlightSearchResults)
  },
  {
    path: 'flight-booking',
    loadComponent: () => import('./pages/flight-booking/flight-booking').then(m => m.FlightBooking)
  },
  {
    path: 'hotel-search-results',
    loadComponent: () => import('./pages/hotel-search-results/hotel-search-results').then(m => m.HotelSearchResults)
  },
  {
    path: 'hotel-booking',
    loadComponent: () => import('./pages/hotel-booking/hotel-booking').then(m => m.HotelBooking)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'payment',
    loadComponent: () => import('./pages/payment/payment').then(m => m.Payment)
  },
  {
    path: 'deals',
    loadComponent: () => import('./pages/deals/deals').then(m => m.Deals)
  },
  {
    path: 'my-trips',
    loadComponent: () => import('./pages/my-trips/my-trips').then(m => m.MyTrips)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile').then(m => m.Profile)
  },
  {
    path: 'scoring',
    loadComponent: () => import('./pages/scoring/scoring').then(m => m.Scoring)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
