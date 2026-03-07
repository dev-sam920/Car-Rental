import { ChangeDetectionStrategy, Component, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { animate, stagger } from 'motion';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section #heroSection class="relative bg-white pt-16 pb-32 overflow-hidden">
      <div class="container mx-auto px-4 flex flex-col items-center">
        <div class="text-center mb-12 max-w-4xl mx-auto z-20 relative">
          <h1 class="animate-item text-4xl md:text-6xl font-extrabold text-brand-dark mb-6 leading-tight uppercase italic">
            Experience Luxury on <span class="text-brand-yellow">Every Road</span>
          </h1>
          <p class="animate-item text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Rent the iconic G-Class and elevate your journey with unmatched power and sophistication. Your premium adventure starts here.
          </p>
        </div>
        
        <!-- Floating Yellow Swooshes -->
        <div class="absolute top-1/4 -right-20 w-1/2 h-64 bg-brand-yellow opacity-10 blur-3xl rounded-full -z-10 transform -rotate-12"></div>
        <div class="absolute bottom-1/4 -left-20 w-1/2 h-64 bg-brand-yellow opacity-10 blur-3xl rounded-full -z-10 transform rotate-12"></div>
        
        <!-- Hero Image -->
        <div class="animate-item relative w-full max-w-4xl mx-auto z-10">
          <img 
            alt="Luxury SUV Hero" 
            class="w-full h-auto drop-shadow-2xl rounded-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK50Jpd0PkgiIjFkf_NdIzR5kJLIh08GDSdrd9zk_sJjAP8QKlY4vblwfckst9njtbIYw3dlarNb3qmaBTA8i2GvuRhc6hKojbghTOTilL12j31f9JSp6v6N7UajjRErn3NVuuVrSrKmpWFFIlCovvLmCKlIg8zowZ2vUOQnkgyB7aVe4iDUSkBPyYBHUfErspe3Q7WH8svuw10A6Bc_rFhzlv4Ip2ALbqzIwnOyci72ipz6o5rwQa9xkgjN3RgdtEFL2HAb2EzdqG"
            referrerpolicy="no-referrer"
          />
          
          <!-- Decorative Yellow Down Arrow -->
          <div class="absolute -bottom-10 left-10 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 14l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit {
  heroSection = viewChild<ElementRef>('heroSection');

  ngAfterViewInit() {
    const items = this.heroSection()?.nativeElement.querySelectorAll('.animate-item');
    if (items) {
      animate(
        items,
        { opacity: [0, 1], y: [40, 0] },
        { delay: stagger(0.2), duration: 0.8, ease: 'easeOut' }
      );
    }
  }
}
