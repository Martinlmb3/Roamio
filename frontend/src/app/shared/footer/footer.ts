import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private router = inject(Router);
  readonly currentYear = new Date().getFullYear();

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
