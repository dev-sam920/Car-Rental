import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <div id="booking-form" class="bg-white shadow-2xl rounded-3xl p-6 md:p-8 max-w-6xl mx-auto -mt-20 relative z-30 border border-gray-100">
      <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
        
        <!-- Pick-up Location -->
        <div class="flex flex-col gap-2">
          <label for="location" class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Pick-up Location</label>
          <div class="relative">
            <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 text-brand-yellow">location_on</mat-icon>
            <select id="location" formControlName="location" class="w-full bg-gray-50 border-none rounded-xl py-4 pl-10 pr-4 text-sm font-semibold text-brand-dark focus:ring-2 focus:ring-brand-yellow appearance-none">
              <option value="">Select Location</option>
              <option value="london">Lagos</option>
              <option value="manchester">Abujs</option>
              <option value="birmingham">Ibadan</option>
            </select>
          </div>
        </div>

        <!-- Pick-up Date -->
        <div class="flex flex-col gap-2">
          <label for="pickupDate" class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Pick-up Date</label>
          <div class="relative">
            <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 text-brand-yellow">calendar_today</mat-icon>
            <input id="pickupDate" type="date" formControlName="pickupDate" class="w-full bg-gray-50 border-none rounded-xl py-4 pl-10 pr-4 text-sm font-semibold text-brand-dark focus:ring-2 focus:ring-brand-yellow">
          </div>
        </div>

        <!-- Return Date -->
        <div class="flex flex-col gap-2">
          <label for="returnDate" class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Return Date</label>
          <div class="relative">
            <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 text-brand-yellow">event</mat-icon>
            <input id="returnDate" type="date" formControlName="returnDate" class="w-full bg-gray-50 border-none rounded-xl py-4 pl-10 pr-4 text-sm font-semibold text-brand-dark focus:ring-2 focus:ring-brand-yellow">
          </div>
        </div>

        <!-- Car Type -->
        <div class="flex flex-col gap-2">
          <label for="carType" class="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Vehicle Type</label>
          <div class="relative">
            <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 text-brand-yellow">directions_car</mat-icon>
            <select id="carType" formControlName="carType" class="w-full bg-gray-50 border-none rounded-xl py-4 pl-10 pr-4 text-sm font-semibold text-brand-dark focus:ring-2 focus:ring-brand-yellow appearance-none">
              <option value="all">All Vehicles</option>
              <option value="luxury">Luxury Sedan</option>
              <option value="suv">Premium SUV</option>
              <option value="sport">Sport Coupe</option>
            </select>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex flex-col">
          <button type="submit" [disabled]="bookingForm.invalid" class="w-full bg-brand-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm">
            Find Your Car
          </button>
        </div>
      </form>
      
      @if (submitted()) {
        <div class="mt-6 p-4 bg-green-50 text-green-700 rounded-xl text-center font-semibold animate-pulse">
          Searching for the best luxury vehicles for you...
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingWidgetComponent {
  private fb = inject(FormBuilder);
  bookingForm: FormGroup = this.fb.group({
    location: ['', Validators.required],
    pickupDate: ['', Validators.required],
    returnDate: ['', Validators.required],
    carType: ['all']
  });
  submitted = signal(false);

  onSubmit() {
    if (this.bookingForm.valid) {
      this.submitted.set(true);
      console.log('Booking Request:', this.bookingForm.value);
      setTimeout(() => this.submitted.set(false), 3000);
    }
  }
}
