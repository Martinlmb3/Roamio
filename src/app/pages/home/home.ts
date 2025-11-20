import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface Destination {
  name: string;
  country: string;
  imageUrl: string;
}

interface Deal {
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, Footer, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  private router = inject(Router);
  activeTab: string = 'flights';

  popularDestinations: Destination[] = [
    {
      name: 'Paris',
      country: 'France',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk9K_Tbzx97hQ7jxCucCvYerTccGxu7-ZUWAqbIwjwUUM3vUBP2XjhFYPcREv7NExNUPhjb1_o_bfOtGyk2y0ds5hyITXCbKI-Ovjgmm_uYDQ5CoODHnhX1051AKNJXroGjVgV4cV_wE6aZANEAh2O-7XgZov4JTllObFFINA-tYxI7usXsiaak2rgzbwcetyP4v1IMO5XfxuWU48RwgH-Y5mbfe62Ah9KT59JetaNDezBpccXCoaj43noW6Cv6xZEnZyTDqOTvmjn'
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2_yWC_9EKp6ZQ-nGuv0lseeqoJjVusq-W9vOTnYHruE4JreP8skHZkSjdpzpFYcnjK3FBJSZ6fpwG88O8mfZQzEQ21E7FFVSSSVHiXf1JgivO1EPfBuOtvieRKT2uVDEwiGy1lOcBbCYOBhUtdDLgE3z56peKoSmCTrnZDkDjC4W26W8fBfJw0PUaHPSR22SCRdXWUqunHmieHck2ENLsTcaVxFELPOdYQqGPwMQckYvEVH30HTZNqrScqT1iTsn99oL4ws4fUmiX'
    },
    {
      name: 'Rome',
      country: 'Italy',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzANLFeCj2x-SyRE1WYzb8L3qY4z-FtHE9X_Tha81rI8NRQS8PFK_v32gwCYGVTrW8vOTGIS2KUqQzsXKqG8Kfhwn26UKd5YDBdUHZrPMG7uy4CNxSX5mrI0PWVVyQ8F_yXFSEX60p2PHfTp4BbDpWI5_LwIAWwux7ZdWhLfKqE5IzHunqC9qOyb6OdmC_ENz2CPowqw0xj_TJ4XYhF2fXJWPAtrY2Y6mGgnCCoOsh0aVykxW97mDXrDo6C4yOqhuprgZmuIx5O38u'
    },
    {
      name: 'New York',
      country: 'USA',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_fSeZCOQAg6_kRAE3Te4MZReFNWXUvBYt0DHsSwB0I_HiE7iGO84ZdEcgCjP9i5586ixQnkiO3pEInQ9sw8svH9NJ0Afjb5LICnfNRJiYbelMIGLoxtOgo_aMFNyKmiZ1JjlbfEOIToE1iTkBGZ3nkLKVHHAoPS9Jz43QMzwF1dbUQizbkHSCSWze2VYVAeKRRd9wqQdZ5p5HquIwLm5S5ukOfDFWl4C4vaTw2jIArKdq7SuE2GDr1qyi9Avml6aLknpGhFXUWwkh'
    }
  ];

  exclusiveDeals: Deal[] = [
    {
      title: 'Bali Luxury Stays',
      description: 'Experience paradise with exclusive discounts on top-rated villas and resorts.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi7XRTYhWM_WfWo5PIgjIqYiyt1Uu6o87sJIyiPO-bJ5d1LGXwDObnd1PmdAenWeZ18OZZgvShA9gXT3hkQPi5ydFuxXpNAygUNBIj5KUkbiJoMycnow5xeo0v-J6b8RVQe6qASlxylAvAuyC9pgZbIiRXVRskWOcVID3p6zudxroU8KGPz5Bz-BO81D47ljfYb23kGXIEG_WGYxgGSNaJhXB4zAKbXe3OjDbbeLK_H_WOtL-VR5I4-mA7CAR3bVNvIZ1_1L2scZo-',
      badge: 'Up to 30% Off'
    },
    {
      title: 'Flights to Europe',
      description: 'Discover Europe\'s charm with round-trip flights from major US cities.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm4xcsN_4jaaH2EGyY9W1N62ujqghUAJgTw_gcYjvNHDzb7rtHhT3-EHcaAYQQHqD8Y6DWzrcOAZuOmOqC39fSDrnkEBWBrruMwyiUF_p8XUxIpMkey2N3WQkbaaeFNtgV9GiBkZnyjqw4jzkZYoAKq9PfDHC0uHupNt3AmapG36ZFDdPpe6tYcGxCgaq0B02w7x0zb4k6e1X5UPAdjJl-f4INqdV2P4lGgypbYA7pIapYr6xuAY44x7796_CUrC8tsjYkdBesLEO6',
      badge: 'From $499'
    },
    {
      title: 'Weekend Getaways',
      description: 'Spontaneous trip? Find amazing deals on hotels for this weekend.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc5faPqddOTehiuIrhm7ydf8xtVsNfGZ71fhNms8IwzVhH8kizBueGmDsw3Ba3gtErqijLgws9szrtm49COqS29qUmQRcjRGD51-JEyWh6UeK2e18v1tnP3ro6TlpclR8jThpB_0Zz6PsOBtTLZ2n6pYL132mcYxp0fdeXmQ-OizCHSTRpelHh2SFs8QXTNkM_MpsYFHPTE7ifXk5nilYXM5blCJjWMsaVfaUvAou60JkjT_JxmHQyKrs0hVzkKfQE413IWhz3doRB',
      badge: 'Last Minute'
    }
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
