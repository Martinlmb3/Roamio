import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Footer } from '../../shared/footer/footer';
import { Header } from '../../shared/header/header';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule, Footer, Header],
  templateUrl: './signup.html',
  styleUrl: './sign-up.css',
  standalone: true
})
export class SignUp {
  private auth = inject(AuthService);
  private router = inject(Router);

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  passwordVisible = false;
  loading = false;
  errorMsg = '';

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(): void {
    this.loading = true;
    this.errorMsg = '';
    this.auth.signup({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password }).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        this.loading = false;
        if (err.status === 409) this.errorMsg = 'An account with this email already exists.';
        else if (err.status === 400) this.errorMsg = 'Please fill all fields correctly (password min 8 chars).';
        else this.errorMsg = 'Something went wrong. Try again.';
      }
    });
  }
}
