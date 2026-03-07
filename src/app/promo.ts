import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="bg-brand-dark py-24 relative overflow-hidden">
      <!-- Decorative Swoosh Separator Top -->
      <div class="absolute top-0 left-0 w-full h-16 bg-brand-yellow curve-top"></div>
      
      <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column: Content -->
        <div class="text-white">
          <span class="text-brand-yellow italic mb-4 block uppercase tracking-widest text-sm">Uncompromising Quality & Value</span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Tailored Solutions for <br/> 
            <span class="text-brand-yellow italic">Uncompromising Quality & Value</span>
          </h2>
          <p class="text-gray-400 mb-8 max-w-md">
            As a global leader in luxury mobility, we offer a curated fleet of premium vehicles paired with competitive pricing and bespoke rental terms to ensure your travel experience is seamless and sophisticated.
          </p>
          <a class="inline-block bg-brand-yellow text-brand-dark font-bold py-4 px-8 rounded-full uppercase transition-all hover:bg-white hover:scale-105" href="#">
            Check out cars
          </a>
          <div class="mt-16">
            <img 
              alt="Black SUV Side View" 
              class="w-full h-auto drop-shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn0_1nGnEhCuJRp9jbzZJZGHhHwAequZRUgB87r-SXXQPuhPPVcztreoAi6PcLhhWN6wndGQ-vViS72uPsNX2EiE0OwW1p3E6_3vcFrZm50QxzFx40GqXbJWSo1cFO113uZpJV_WEDZOJ9CAh8HruVT0EBXQr9DPlZDSH1BTqzk46x-yB-JrzG4S-SHAjzTcveQiqCRstg36yJsJuvTlAYoaAx89OV04-ug0RCDz-kuJmCYQ0RhaiFLZzTX69GVBbYPhRs5pa_V-VX"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
        
        <!-- Right Column: Offer Cards -->
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <!-- Weekly Offer -->
          <div class="bg-brand-yellow p-8 rounded-2xl w-full flex-1 shadow-2xl relative overflow-hidden border-b-8 border-brand-dark">
            <div class="relative z-10">
              <h4 class="text-brand-dark font-extrabold italic uppercase mb-8 border-b border-brand-dark/20 pb-4">Weekly Pro Offer</h4>
              <ul class="space-y-4">
                @for (item of weeklyOffers; track item) {
                  <li class="flex items-center gap-2 text-brand-dark font-medium italic text-sm">
                    <mat-icon class="text-sm">check_circle</mat-icon>
                    {{ item }}
                  </li>
                }
              </ul>
            </div>
          </div>
          
          <!-- Daily Rental -->
          <div class="bg-white p-8 rounded-2xl w-full flex-1 shadow-xl mt-8 md:mt-16">
            <h4 class="text-brand-dark font-extrabold italic uppercase mb-8 border-b border-gray-100 pb-4">Daily Car Rental</h4>
            <ul class="space-y-4 text-xs font-semibold text-gray-400 italic">
              <li>No free offers</li>
              <li>No free driver</li>
              <li>5% Cash back</li>
              <li>1000 mileage</li>
              <li>Default deposit</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Decorative Swoosh Separator Bottom -->
      <div class="absolute bottom-0 left-0 w-full h-16 bg-brand-yellow curve-bottom"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {
  weeklyOffers = [
    '1+ Day free car',
    '1+ Day free driver',
    '20% Cash back',
    'Unlimited mileage'
  ];
}
