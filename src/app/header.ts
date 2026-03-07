import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4 h-20 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-1 font-extrabold text-2xl italic">
          <span class="text-brand-dark">CAR</span><span class="text-brand-yellow">RENTAL</span>
        </div>
        
        <!-- Navigation Links -->
        <nav class="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
          <a class="text-brand-yellow border-b-2 border-brand-yellow" href="#">Home</a>
          <a class="hover:text-brand-dark transition-colors" href="#fleet">Fleet</a>
          <a class="hover:text-brand-dark transition-colors" href="#booking-form">Booking</a>
          <a class="hover:text-brand-dark transition-colors" href="#contact">Contact</a>
        </nav>
        
        <!-- CTA Button -->
        <div class="flex items-center gap-4">
          <button (click)="isMenuOpen.set(!isMenuOpen())" class="lg:hidden text-brand-dark">
            <mat-icon>{{ isMenuOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
          <a class="bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-full text-sm uppercase transition-transform hover:scale-105" href="#booking-form">
            Request a Car
          </a>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
        <div class="lg:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4 shadow-lg">
          <a class="text-brand-yellow font-bold" href="#">Home</a>
          <a class="text-gray-600 font-semibold" href="#fleet">Fleet</a>
          <a class="text-gray-600 font-semibold" href="#booking-form">Booking</a>
          <a class="text-gray-600 font-semibold" href="#contact">Contact</a>
        </div>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isMenuOpen = signal(false);
}
