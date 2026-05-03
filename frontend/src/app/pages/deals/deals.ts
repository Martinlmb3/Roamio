import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

interface Deal {
  id: number;
  title: string;
  description: string;
  destination: string;
  imageUrl: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  badge: string;
  validUntil: string;
  category: 'flight' | 'hotel' | 'package';
}

@Component({
  selector: 'app-deals',
  imports: [CommonModule, Header, Footer],
  templateUrl: './deals.html',
  styleUrl: './deals.css',
  standalone: true
})
export class Deals {
  selectedCategory: string = 'all';

  deals: Deal[] = [
    {
      id: 1,
      title: 'Bali Paradise Escape',
      description: 'Experience luxury in Bali with exclusive villa stays and spa treatments',
      destination: 'Bali, Indonesia',
      imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      originalPrice: 1299,
      discountedPrice: 899,
      discount: '30% OFF',
      badge: 'Limited Time',
      validUntil: '2024-12-31',
      category: 'hotel'
    },
    {
      id: 2,
      title: 'Paris Round Trip',
      description: 'Direct flights to Paris from major US cities with flexible dates',
      destination: 'Paris, France',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      originalPrice: 899,
      discountedPrice: 499,
      discount: '45% OFF',
      badge: 'Hot Deal',
      validUntil: '2024-11-30',
      category: 'flight'
    },
    {
      id: 3,
      title: 'Tokyo Adventure Package',
      description: 'Complete package with flights, hotel, and city tours',
      destination: 'Tokyo, Japan',
      imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      originalPrice: 2499,
      discountedPrice: 1799,
      discount: '28% OFF',
      badge: 'Best Value',
      validUntil: '2024-12-15',
      category: 'package'
    },
    {
      id: 4,
      title: 'Caribbean Cruise',
      description: '7-night all-inclusive Caribbean cruise with premium amenities',
      destination: 'Caribbean',
      imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      originalPrice: 1899,
      discountedPrice: 1299,
      discount: '32% OFF',
      badge: 'Popular',
      validUntil: '2024-12-20',
      category: 'package'
    },
    {
      id: 5,
      title: 'Dubai Luxury Stay',
      description: '5-star hotel with breakfast and desert safari included',
      destination: 'Dubai, UAE',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
      originalPrice: 1599,
      discountedPrice: 999,
      discount: '38% OFF',
      badge: 'Exclusive',
      validUntil: '2024-11-25',
      category: 'hotel'
    },
    {
      id: 6,
      title: 'New York City Getaway',
      description: 'Weekend in NYC with Broadway show tickets',
      destination: 'New York, USA',
      imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
      originalPrice: 799,
      discountedPrice: 599,
      discount: '25% OFF',
      badge: 'Last Minute',
      validUntil: '2024-11-22',
      category: 'package'
    }
  ];

  get filteredDeals(): Deal[] {
    if (this.selectedCategory === 'all') {
      return this.deals;
    }
    return this.deals.filter(deal => deal.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
