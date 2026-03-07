import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div class="md:w-1/2">
          <span class="inline-block bg-gray-100 text-gray-400 text-xs italic py-2 px-4 rounded-full mb-4 uppercase tracking-widest">Our good testimonials</span>
          <h2 class="text-4xl font-extrabold mb-4 uppercase italic">See what said our <br/> happy <span class="text-brand-yellow italic underline underline-offset-4">customers</span></h2>
        </div>
        
        <div class="md:w-1/2 relative">
          <div class="bg-brand-dark p-12 rounded-2xl text-white relative shadow-2xl">
            <div class="absolute -top-6 -left-6 text-brand-yellow">
              <svg class="w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017V5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91241 16 3.017 16H6.017C6.56929 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56929 8 6.017 8H1.017V5H6.017C8.22614 5 10.017 6.79086 10.017 9V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"></path>
              </svg>
            </div>
            <p class="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
              "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."
            </p>
            <div class="flex items-center gap-4">
              <img 
                alt="Daniel" 
                class="w-14 h-14 rounded-full border-2 border-brand-yellow object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmIk9UWBaupwETC_H_KH7Q9vHhPr2719v7voW9CZZdY8Hk5kwrFRr3YYCZfgdP3bfyXkWX55y2pFjnDCdqNZlUchavmjK90NxDSuT4FUVBQJ6el0-1vpvizO9lzU8y8fxpDaPgSPbB9Ci9H1xzZDmNGldG0-kuH8rP5wHTmzUWWBUVS8MkGL_TyIlxVskdH1i35KsGgnPlLuuJRKm3Uh4ZwRr8wS1nmLFQla16qButW3B2k_tmDzPnz3h6RbRrlzqnTq5uy6j6GjKX"
                referrerpolicy="no-referrer"
              />
              <div>
                <h5 class="font-bold text-base">Mike Jordan</h5>
                <span class="text-brand-yellow text-sm italic">Teacher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {}
