import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

interface Trip {
  id: number;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  nights: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  type: 'flight' | 'hotel' | 'both';
  imageUrl: string;
  flightNumber?: string;
  hotelName?: string;
}

@Component({
  selector: 'app-my-trips',
  imports: [CommonModule, Header, Footer],
  templateUrl: './my-trips.html',
  styleUrl: './my-trips.css',
  standalone: true
})
export class MyTrips {
  activeTab: 'upcoming' | 'past' = 'upcoming';

  upcomingTrips: Trip[] = [
    {
      id: 1,
      title: 'Trip to Barcelona',
      destination: 'Barcelona, Spain',
      startDate: '2024-10-15',
      endDate: '2024-10-22',
      nights: 7,
      status: 'confirmed',
      type: 'both',
      imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
      flightNumber: 'BA 492',
      hotelName: 'Hotel Arts Barcelona'
    },
    {
      id: 2,
      title: 'Weekend in Dublin',
      destination: 'Dublin, Ireland',
      startDate: '2024-11-12',
      endDate: '2024-11-14',
      nights: 2,
      status: 'confirmed',
      type: 'flight',
      imageUrl: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800',
      flightNumber: 'Aer Lingus, EI456'
    }
  ];

  pastTrips: Trip[] = [
    {
      id: 3,
      title: 'Paris Adventure',
      destination: 'Paris, France',
      startDate: '2024-09-01',
      endDate: '2024-09-05',
      nights: 4,
      status: 'confirmed',
      type: 'both',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      flightNumber: 'AF 1234',
      hotelName: 'Hotel Le Marais'
    }
  ];

  get displayedTrips(): Trip[] {
    return this.activeTab === 'upcoming' ? this.upcomingTrips : this.pastTrips;
  }

  setActiveTab(tab: 'upcoming' | 'past'): void {
    this.activeTab = tab;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}
