import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-scoring',
  imports: [Header, Footer],
  templateUrl: './scoring.html',
  styleUrl: './scoring.css',
  standalone: true
})
export class Scoring {}
