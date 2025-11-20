import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface Hotel {
  name: string;
  location: string;
  stars: number;
  imageUrl: string;
  amenities: {
    icon: string;
    name: string;
  }[];
  rating: number;
  ratingText: string;
  reviews: number;
  price: number;
  totalPrice: number;
  favorite: boolean;
}

@Component({
  selector: 'app-hotel-search-results',
  imports: [CommonModule, Footer, Header],
  templateUrl: './hotel-search-results.html',
  styleUrl: './hotel-search-results.css',
  standalone: true
})
export class HotelSearchResults {
  hotels: Hotel[] = [
    {
      name: 'Grand Hyatt Paris',
      location: 'Eiffel Tower District',
      stars: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7uexSSnvFsVWusUsSSHouqf0XVBefJrX506DWzbrJYZ02jYqsHfqOECLGEXmdBzG5p3GAkw6nGwMBXpqLrzK825Icx41Lzxqy3AVL95Ss7P2y7QFO2InMrO8djjc1lHWTXnJ5KmKtH-PzvO_0g2uN0vrXsDFrPo-Of7MltJeqdNW3TWcQ8_5ypSpTHdO2ImnepH-MKFhYCVxlfu8PANZi7wfPlSJMngeZwm6Ja8t2tDCLJ32z2gxc0qgLX7VbkY-F8SA3VI5t8q4c',
      amenities: [
        { icon: 'wifi', name: 'Free Wi-Fi' },
        { icon: 'pool', name: 'Pool' },
        { icon: 'restaurant', name: 'Restaurant' }
      ],
      rating: 9.2,
      ratingText: 'Exceptional',
      reviews: 1288,
      price: 350,
      totalPrice: 700,
      favorite: false
    },
    {
      name: 'Le Bristol Paris',
      location: 'Champs-Élysées',
      stars: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkOBU4sTo398dN6Zv5rBU9LnGie_-qZvdUYKQxSEZBY890-BSAXoD1BmfFZ5EhOYiOLytllLEbtiuElNujuiOEwk6qkJhms45I1xHyV9V97m1GEVk5tzrDHv9n2wQ0ZmrNMAcPqhaMBR3l3sVXP3OjY3ojdrjysU2fnl6tEU0fdCYiqizFPU_atoEIPmFj8zsfXQvA-y5XiZyfsL9gN4-1wakCTnmcANlw39Hdu9E7yXHYxjyIanRt3c_KC40wAmBGxgkhuCHUXDuE',
      amenities: [
        { icon: 'wifi', name: 'Free Wi-Fi' },
        { icon: 'spa', name: 'Spa' },
        { icon: 'pets', name: 'Pet-friendly' }
      ],
      rating: 9.8,
      ratingText: 'Exceptional',
      reviews: 950,
      price: 890,
      totalPrice: 1780,
      favorite: false
    },
    {
      name: 'Ibis Paris Montmartre 18ème',
      location: 'Montmartre',
      stars: 3,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM4jCQl8pHKhtx908dHm43HAMdcFid0Pis_N65N7a8XcUR-CSvEXyuI1Xce0gRfmQnQoQLP-GZjb7XM_wD2ep19NoTRKuuwx7kpnvbsVru4tOWMaqcGZSbNJjK_g2qd_yRr4PgB9hZgeo67Davk2l8e3cwaaG5FcVh-5IaTpTdZ8pvQJPeHdIm16X3xmuJX02rcqmc8aS2T5iUOfE-zV6B2kNuJ7HJ2whruMCuE99YqGO5nj7szBLDVPm3FvYk0cG1cQ7Vgp3i5kTQ',
      amenities: [
        { icon: 'wifi', name: 'Free Wi-Fi' },
        { icon: 'local_bar', name: 'Bar' }
      ],
      rating: 8.1,
      ratingText: 'Very Good',
      reviews: 4530,
      price: 180,
      totalPrice: 360,
      favorite: true
    }
  ];

  getStarArray(stars: number): number[] {
    return Array(5).fill(0).map((_, i) => i < stars ? 1 : 0);
  }
}
