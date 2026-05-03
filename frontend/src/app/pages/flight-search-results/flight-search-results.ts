import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface Flight {
  airline: string;
  logoUrl: string;
  departure: {
    time: string;
    airport: string;
  };
  arrival: {
    time: string;
    airport: string;
  };
  duration: string;
  stops: string;
  stopsClass: string;
  price: number;
}

@Component({
  selector: 'app-flight-search-results',
  imports: [CommonModule, Footer, Header],
  templateUrl: './flight-search-results.html',
  styleUrl: './flight-search-results.css',
  standalone: true
})
export class FlightSearchResults {
  flights: Flight[] = [
    {
      airline: 'British Airways',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUGbM77i1Md54JelYmXySnqvH-rAuicW-hGHh8jxCrnemA5SeQFudp-9wuLr1i65-V6JSz9hOZ8co5fFWvIJVR3N3jbZ8QGOf2wW_md5btMZX0MpulJwgOHBgh9p8ZDxoDxFX4DqWtWnPhuYILgcnFhNtyrKaWH1QmvpDLcA__cywj9AyShBH5tJPITTAOLqswNqVSTVuzdVpqkDRjPxZXi2g3HgMjmmXAXvJvDnfrHxl0A3lZh3fLM-LywvypIajeM-ytQ_A2GtXJ',
      departure: { time: '10:30', airport: 'LHR' },
      arrival: { time: '13:45', airport: 'JFK' },
      duration: '8h 15m',
      stops: 'Direct',
      stopsClass: 'text-green-600 dark:text-green-400',
      price: 589
    },
    {
      airline: 'American Airlines',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0RvV5pSCuo3Jvk4ONHacOSBLex48_unSG_XcZ4kpXEx3sNePIGZcJIWQ1UOYWih-kpSfpIWpCOE_JMYMZsSwep4v4fnZsVJFbU7e8vjtyzZiY-iIu9KCcX6Rt_nIjVCae0a4AF6ynjrEszgWpgpGlqe7mGBS9mKvwvJU-94ZnOBYNilbIPVvyPLv5B_bFNlskZAY3YkfHKnC3w8wBQB68TI4YmUrnTzFy-VbHncp9XAWGj3tr1gD42kTDjNgHD7VWs6IECELIZpA6',
      departure: { time: '11:00', airport: 'LHR' },
      arrival: { time: '18:30', airport: 'JFK' },
      duration: '10h 30m',
      stops: '1 Stop (DUB)',
      stopsClass: 'text-orange-600 dark:text-orange-400',
      price: 520
    },
    {
      airline: 'Virgin Atlantic',
      logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbc0_3KvXC91YY6pOCGrSkwR3yChkoMKXClp15BouLzbesUjg3wwvvP3PidrHi-AQFS489ZNOKkidQNKZeQnrCPqFANBgNu2Edm9HxfmetYrrEdbKPEIAs9KCK2CXyl-plDY6b3BMXtRYYAXMiVnGRC7QJB_7WyMpH9s4BT_knBOxfhMnu3gBtFEnCXy6vwL2MhpR41twf1Z0XRDWBrsOzvSOUTxh-GCJ1DVI1aDuAplGIL9WLpva2afL9HrkBm5QLXcRg61O5K8rB',
      departure: { time: '09:15', airport: 'LGW' },
      arrival: { time: '12:40', airport: 'JFK' },
      duration: '8h 25m',
      stops: 'Direct',
      stopsClass: 'text-green-600 dark:text-green-400',
      price: 615
    }
  ];
}
