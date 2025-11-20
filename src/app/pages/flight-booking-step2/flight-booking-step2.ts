import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface PassengerForm {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-flight-booking-step2',
  imports: [CommonModule, Footer, Header],
  templateUrl: './flight-booking-step2.html',
  styleUrl: './flight-booking-step2.css',
  standalone: true
})
export class FlightBookingStep2 {
  baggageCount: number = 0;
  adultsCount: number = 1;

  passenger: PassengerForm = {
    firstName: '',
    lastName: '',
    email: ''
  };

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
}
