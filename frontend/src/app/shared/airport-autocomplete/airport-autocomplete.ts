import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Airport, AIRPORTS } from './airports.data';

@Component({
  selector: 'app-airport-autocomplete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './airport-autocomplete.html',
})
export class AirportAutocomplete implements OnChanges {
  @Input() label = 'From';
  @Input() inputId = 'airport';
  @Input() placeholder = 'City or airport';
  @Input() inputClass = '';

  /** Two-way binding: receives and emits the 3-letter IATA code */
  @Input() code = '';
  @Output() codeChange = new EventEmitter<string>();

  query = '';
  isOpen = false;
  results: Airport[] = [];

  /** Reverse-lookup: when parent sets the code (e.g. on page reload), show the label */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && this.code) {
      const match = AIRPORTS.find(a => a.code === this.code);
      if (match) this.query = `${match.city} (${match.code})`;
    }
  }

  onInput(): void {
    this.code = '';
    this.codeChange.emit('');
    const q = this.query.trim().toLowerCase();
    if (q.length < 1) { this.results = []; this.isOpen = false; return; }
    this.results = AIRPORTS.filter(a =>
      a.city.toLowerCase().includes(q) ||
      a.code.toLowerCase().startsWith(q) ||
      a.name.toLowerCase().includes(q) ||
      a.country.toLowerCase().startsWith(q)
    ).slice(0, 7);
    this.isOpen = this.results.length > 0;
  }

  select(airport: Airport): void {
    this.query = `${airport.city} (${airport.code})`;
    this.code = airport.code;
    this.codeChange.emit(airport.code);
    this.isOpen = false;
    this.results = [];
  }

  onFocus(): void {
    if (this.results.length > 0) this.isOpen = true;
  }

  stopProp(e: Event): void { e.stopPropagation(); }

  @HostListener('document:click')
  close(): void { this.isOpen = false; }
}
