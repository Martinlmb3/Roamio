import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, Footer, Header],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
  standalone: true
})
export class SignUp {
  private router = inject(Router);
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Handle sign up logic here
    console.log('Sign up form submitted');
    // Redirect to dashboard after sign up
    this.router.navigate(['/dashboard']);
  }
}
