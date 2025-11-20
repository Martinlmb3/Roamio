import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface Trip {
  destination: string;
  dates: string;
  type: string;
  icon: string;
  status: string;
  statusClass: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Footer, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class Dashboard {
  trips: Trip[] = [
    {
      destination: 'Paris, France',
      dates: 'Jun 05 - Jun 12, 2024',
      type: 'flight',
      icon: 'flight',
      status: 'Completed',
      statusClass: 'text-green-600 dark:text-green-400 bg-green-500/10'
    },
    {
      destination: 'Tokyo, Japan',
      dates: 'Mar 10 - Mar 18, 2024',
      type: 'hotel',
      icon: 'bed',
      status: 'Completed',
      statusClass: 'text-green-600 dark:text-green-400 bg-green-500/10'
    }
  ];
}
