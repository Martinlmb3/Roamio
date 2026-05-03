import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, Footer, Header],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
  standalone: true
})
export class Payment {
  selectedPaymentMethod: string = 'card';

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }
}
