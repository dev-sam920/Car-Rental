import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <footer class="bg-brand-dark pt-20 pb-10">
      <div class="container mx-auto px-4">
        <!-- CTA Banner -->
        <div class="bg-brand-yellow p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between mb-20 shadow-2xl transform -translate-y-10">
          <div class="flex items-center gap-6 mb-8 md:mb-0">
            <div class="bg-brand-dark p-4 rounded-2xl text-brand-yellow">
              <mat-icon class="text-4xl w-10 h-10 flex items-center justify-center">mail</mat-icon>
            </div>
            <div>
              <h3 class="text-2xl font-extrabold italic text-brand-dark uppercase">Need a Car? Contact us now</h3>
              <p class="text-2xl md:text-3xl font-black text-brand-dark">07012069711</p>
            </div>
          </div>
          <a href="tel:+1818123456789" class="bg-brand-dark text-brand-yellow font-bold py-4 px-10 rounded-full uppercase transition-all hover:scale-105">
            Call Now
          </a>
        </div>
        
        <div class="flex flex-col items-center border-t border-gray-800 pt-12">
          <!-- Footer Logo -->
          <div class="flex items-center gap-1 font-extrabold text-3xl italic mb-6">
            <span class="text-white">CAR</span><span class="text-brand-yellow">RENTAL</span>
          </div>
          <p class="text-gray-500 text-xs text-center mb-8 font-medium">
            Copyright © 2026 CarRental. All Rights Reserved. Designed for Excellence.
          </p>
          
          <div class="flex gap-6 text-gray-400">
            <a href="#" class="hover:text-brand-yellow transition-colors"><mat-icon>facebook</mat-icon></a>
            <a href="#" class="hover:text-brand-yellow transition-colors"><mat-icon>camera_alt</mat-icon></a>
            <a href="#" class="hover:text-brand-yellow transition-colors"><mat-icon>alternate_email</mat-icon></a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
