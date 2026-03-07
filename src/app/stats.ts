import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="relative bg-brand-dark py-32 overflow-hidden">
      <!-- Yellow Arc Separator -->
      <div class="absolute top-0 left-0 w-full h-24 bg-brand-yellow curve-top"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 text-white">
          <span class="text-brand-yellow italic text-sm mb-4 block uppercase tracking-widest">Find your car in one of our</span>
          <h2 class="text-4xl font-extrabold mb-4 uppercase italic">Find the perfect rental car</h2>
          <p class="text-xl font-medium">We compare car rental prices, <span class="text-brand-yellow italic underline underline-offset-8">you save!</span></p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          @for (stat of stats; track stat.label) {
            <div class="text-center">
              <div class="text-6xl font-extrabold text-brand-yellow italic mb-2">{{ stat.value }}</div>
              <span class="bg-white text-brand-dark font-bold text-xs uppercase py-2 px-6 rounded-full inline-block shadow-lg">{{ stat.label }}</span>
            </div>
          }
        </div>
        
        <div class="mt-20 flex justify-center">
          <img 
            alt="Muscle Car" 
            class="w-full max-w-2xl h-auto drop-shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxPcdIfvNxGCh4H4Zhy8l2tWhppPlq_ZomWXGol3uOri_lq7YxOws5nfGBzeHmBBT6VmfaRJIEe9fXS-4iaz2nugkPkSTFSpYGvVPW8OUsp-LRkpiYlGz7e3wTShHMPHY1y6XvVjYIzcAM0XByYGm4IlNMjGkYVV_c6f4yKl9e2CKckE_naZKeBvA6n18RsqrVj_3TNlD2irh4fsZb-t2SNZRrn8bHN22aQmev1S0g7W-XHv39lOBPGyj6QMluPgRf7gTum-0dRtbE"
            referrerpolicy="no-referrer"
          />
        </div>
      </div>
      
      <!-- Yellow Arc Separator Bottom -->
      <div class="absolute bottom-0 left-0 w-full h-24 bg-brand-yellow curve-bottom"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  stats = [
    { value: '145', label: 'Countries' },
    { value: '10K', label: 'Locations' },
    { value: '27+', label: 'Partners' },
    { value: '38+', label: 'Languages' },
  ];
}
