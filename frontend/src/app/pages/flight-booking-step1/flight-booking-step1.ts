import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface FareOption {
  name: string;
  price: number;
  selected: boolean;
  features: {
    text: string;
    included: boolean;
  }[];
}

@Component({
  selector: 'app-flight-booking-step1',
  imports: [CommonModule, Footer, Header],
  templateUrl: './flight-booking-step1.html',
  styleUrl: './flight-booking-step1.css',
  standalone: true
})
export class FlightBookingStep1 {
  baggageCount: number = 0;
  adultsCount: number = 1;

  fareOptions: FareOption[] = [
    {
      name: 'Basic',
      price: 129,
      selected: true,
      features: [
        { text: '1 Small Bag', included: true },
        { text: 'Seat Selection', included: false },
        { text: 'Checked Bag', included: false }
      ]
    },
    {
      name: 'Plus',
      price: 189,
      selected: false,
      features: [
        { text: '1 Small Bag', included: true },
        { text: 'Standard Seat', included: true },
        { text: '20kg Checked Bag', included: true }
      ]
    },
    {
      name: 'Flex',
      price: 249,
      selected: false,
      features: [
        { text: '1 Small Bag', included: true },
        { text: 'Any Seat', included: true },
        { text: 'Flight Changes', included: true }
      ]
    }
  ];

  incrementBaggage(): void {
    this.baggageCount++;
  }

  decrementBaggage(): void {
    if (this.baggageCount > 0) {
      this.baggageCount--;
    }
  }

  incrementAdults(): void {
    this.adultsCount++;
  }

  decrementAdults(): void {
    if (this.adultsCount > 1) {
      this.adultsCount--;
    }
  }

  selectFare(index: number): void {
    this.fareOptions.forEach((option, i) => {
      option.selected = i === index;
    });
  }
}
