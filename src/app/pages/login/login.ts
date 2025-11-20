import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-login',
  imports: [CommonModule, Footer, Header],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {
  private router = inject(Router);
  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Handle login logic here
    console.log('Login form submitted');
    // Redirect to dashboard after login
    this.router.navigate(['/dashboard']);
  }
}
