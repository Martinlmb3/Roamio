import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

interface Room {
  name: string;
  size: string;
  imageUrl: string;
  features: string[];
  price: number;
}

@Component({
  selector: 'app-hotel-booking',
  imports: [CommonModule, Footer, Header],
  templateUrl: './hotel-booking.html',
  styleUrl: './hotel-booking.css',
  standalone: true
})
export class HotelBooking {
  selectedTab: string = 'overview';

  rooms: Room[] = [
    {
      name: 'Deluxe Queen Room with City View',
      size: '1 Queen Bed • 35 m²',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiX4O2eEQYewXin0garqbfus0zkjmZEEKxVydqXUbRCFlBkpaUMEm8kwSfCNtPSuS1XChBDGdWcKh_tXuAnyQ4zqo4UtngyrplU8Lb67x56x-hexUiV9RQP06EbbXL1QYCZYh1HOcrlIspLI93E6sm1Xlr04orUBJJ9BPV14N3DLkSiPCj_9H_aH3JFmXqR5pSk-WPzVBb-HzkUOu8Vejm8ignBDOHYzkpOxwqUWbFRK83qMVep8V9IjCXbaM2mTwkINsZSEMBe-v2',
      features: [
        'Breakfast included',
        'Free cancellation before 20 Nov'
      ],
      price: 249
    },
    {
      name: 'Executive King Suite',
      size: '1 King Bed • 55 m²',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj5bZvepKgxHwNmBWmQEsphRGgr-l8mZScCb3WZzEn-uAO5xmzMUV5DtDWKK4UbOMlLNFGfdQykW5oyLHYLU4mgLwDHIEbScR_kQfcrQ0Ror2Q3FU_RM8_X0uFW_QrdlZbozrsUoIz67LUlW64gMqOxqIaCsu0tBVOmiolqiysEc97QxSgLSyCT6j4a8hCfB8TecVoE4oCfX-c7B2oz5LTsfQGmqPinIJBh3avH_rIWOBp1bct-j045uof89n9CNHpvE8oOetm3ZlU',
      features: [
        'Breakfast included',
        'Free cancellation'
      ],
      price: 410
    }
  ];

  setSelectedTab(tab: string): void {
    this.selectedTab = tab;
  }
}
