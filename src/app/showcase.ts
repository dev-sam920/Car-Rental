import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  standalone: true,
  template: `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block bg-gray-100 text-gray-400 text-xs italic py-2 px-4 rounded-full mb-4 uppercase tracking-widest">Car rental and much more</span>
          <h2 class="text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-tight uppercase italic">
            CarRental provides more than just a traditional <span class="text-brand-yellow italic underline decoration-2 underline-offset-4">car rental</span>
          </h2>
        </div>
        
        <!-- Featured Model -->
        <div class="flex flex-col items-center mb-24">
          <img 
            alt="Standard SUV" 
            class="w-full max-w-3xl h-auto mb-8 hover:scale-105 transition-transform duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5_zIHDa110N0JPWEu3NQNp5oQNBoGQMceFVhXG5IdLpFDK5MD-bSITG1EAtx-HM5BHy3xLJhkCTFLZUtqL6rQsBJxRZg1NO41QfJABngEq6sYfjhi0l1-yVki6UpLlFGU_MtT8etvC2__YxF77Qy8LHYEDmUt2MvlyiIhKQIzezCe_j8SUw_vi4ixzFm50KKwZ4ICP6sYoarDge9cuApXh7qm00m3Wch8OgJ8eqAhHF-y2jWPaYyIcZPM-4TqPIrvzTtpuQYbIuP9"
            referrerpolicy="no-referrer"
          />
          <h3 class="text-3xl font-extrabold italic uppercase mb-4">Standard SUV</h3>
          <p class="text-gray-400 text-center max-w-lg mb-8 text-sm font-medium">
            A standard SUV offers flexibility, seating capacity and power for cruising around town or your next adventure.
          </p>
          <a class="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-full uppercase text-sm shadow-lg hover:bg-brand-dark hover:text-white transition-all hover:scale-105" href="#">
            View all available vehicles
          </a>
        </div>
        
        <!-- Secondary Model -->
        <div class="flex flex-col items-center">
          <img 
            alt="Premium Sedan" 
            class="w-full max-w-3xl h-auto mb-8 hover:scale-105 transition-transform duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMiZh8hYis6QgoC-prz6ni-ja4NnuwHcc6sOxAn12kpl1-5CiHKXeSStKEYX37b39w_jdKkDWXzz9r_cP0thEof2YtOjikeTJ6C7UkDtv-xjx-GAqk9zHa_b8WduHhDC8nd8iWKLAmYD7JycqCNpk3yowEABSnFCIMreBpmvt_PCp_PqccXAdSoPSWe_gX8NA2SC4AwpX4n1r7MTgV2-NOE6VTPOcKi4xwDnYUOsQLh96xw-xqCgi7unni4ROwJo7mSZ_nuPZOHdmq"
            referrerpolicy="no-referrer"
          />
          <h3 class="text-3xl font-extrabold italic uppercase mb-4">Premium Sedan</h3>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {}
