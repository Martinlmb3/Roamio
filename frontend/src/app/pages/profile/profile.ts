import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, Footer, Header],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone: true
})
export class Profile {
  user = {
    fullName: 'Ana Taylor',
    email: 'ana.taylor@email.com',
    membershipLevel: 'Roamio Blue Member',
    joinedYear: '2023',
    dateOfBirth: '15 / August / 1990',
    gender: 'Female',
    nationality: 'American'
  };

  preferences = {
    promotionalEmails: true,
    bookingAlerts: true,
    partnerOffers: false
  };

  activeTab: string = 'personal-information';

  getInitials(): string {
    return this.user.fullName.charAt(0).toUpperCase();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  togglePreference(preference: string): void {
    if (preference === 'promotional') {
      this.preferences.promotionalEmails = !this.preferences.promotionalEmails;
    } else if (preference === 'booking') {
      this.preferences.bookingAlerts = !this.preferences.bookingAlerts;
    } else if (preference === 'partner') {
      this.preferences.partnerOffers = !this.preferences.partnerOffers;
    }
  }

  saveChanges(): void {
    // TODO: Implement save functionality
    console.log('Saving changes...');
  }

  signOut(): void {
    // TODO: Implement sign out functionality
    console.log('Signing out...');
  }
}
