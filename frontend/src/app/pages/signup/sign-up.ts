import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-sign-up',
  imports: [Footer, Header],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
  standalone: true
})
export class SignUp {
  private router = inject(Router);
  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/dashboard']);
  }
}
