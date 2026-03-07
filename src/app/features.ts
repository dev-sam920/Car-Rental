import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="inline-block bg-gray-100 text-gray-400 text-xs italic py-2 px-4 rounded-full mb-4 uppercase tracking-widest">The CarRental Advantage</span>
          <h2 class="text-3xl md:text-4xl font-extrabold">Premium Service, <span class="text-brand-yellow underline decoration-4 underline-offset-8">Exceptional Value</span></h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Feature Item -->
          <div class="flex flex-col items-center text-center group">
            <div class="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-brand-yellow transition-all duration-300 shadow-xl">
              <img 
                alt="No Hidden Fees" 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAak6ovkoPyuki3P7YCCZ83EGvtB2P9syK7Tv7o_X-JBEnjEeGLimvxgcGJGraoPhZPmxxMetv-svM1B0GSmzhtVKvQDy4E9Uw-mahnwTqazs8JBasx3KFt5wS646wQTsgSg-mnf9Tih9YUC6j0zrw_eczFTCvtdZp2lfdBl997Pviv4zliajcgi25DKyC-5UQqYlRqUmNeoNv1YkAEHXMMC6eyfLCVqPrN34l7wm0jKwb4jNj0XgSkeEfGhifK3artdMKsDQwkyMt_"
                referrerpolicy="no-referrer"
              />
            </div>
            <div class="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center -mt-12 mb-4 z-10 shadow-md">
              <mat-icon class="text-brand-dark">account_balance_wallet</mat-icon>
            </div>
            <h3 class="font-bold italic text-lg uppercase tracking-tight">No Extra Hidden Fees</h3>
          </div>

          <!-- Feature Item -->
          <div class="flex flex-col items-center text-center group">
            <div class="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-brand-yellow transition-all duration-300 shadow-xl">
              <img 
                alt="Multilingual" 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdP0FeuWjihVWTyCPWAOwoGmAiQDkQ8jnh0DXrlU9wqp-Ts6UMAoNUbgh--6stUatk9ta5y3TK79nLAHsrhFMw2DwiVDW3HFBeK5Uurq5LXM1ZCYTjMhUj2ya-VfXU4hEcQCeTAQ5Tl1RdeAy3ivhw1Gzf3pN0-7gKsizFUa_bY5pBOQOmkcZU8hyS_XELvLPxha4EZ_oN9jZkZFCF5Dz3W8UE5F4kJsGHL8m41kAjZosZYz-ns-_MDNEhbO3lcq1QIJE73p3t_3cE"
                referrerpolicy="no-referrer"
              />
            </div>
            <div class="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center -mt-12 mb-4 z-10 shadow-md">
              <mat-icon class="text-brand-dark">translate</mat-icon>
            </div>
            <h3 class="font-bold italic text-lg uppercase tracking-tight">Multilingual Service</h3>
          </div>

          <!-- Feature Item -->
          <div class="flex flex-col items-center text-center group">
            <div class="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-brand-yellow transition-all duration-300 shadow-xl">
              <img 
                alt="New Vehicles" 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALOAZSO8q6yrz2e9SVrxxuOwk_iH9hvSvJlls-uJEMEGS0eBUn3mz3mAeY69dUr-dJAESzsQOw6TR32Sp0rF4z8qBuwYUCZZRO7iXtZOf1_LtQvoKfavyHEcnR_fhD0vzod6GhJQsRggvrglrOUqxbYRMhogRY7fBpF7iBxKm2DsEGRL69gmaTfOfXfwgK6LbzP5_wEVIcPC1xo7AfqacZNimEPS74gT85AZ__NH9vclrqanAIXrNjNKD6-HhpmQh5frTAlyz_0afD"
                referrerpolicy="no-referrer"
              />
            </div>
            <div class="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center -mt-12 mb-4 z-10 shadow-md">
              <mat-icon class="text-brand-dark">directions_car</mat-icon>
            </div>
            <h3 class="font-bold italic text-lg uppercase tracking-tight">Brand New Vehicles</h3>
          </div>

          <!-- Feature Item -->
          <div class="flex flex-col items-center text-center group">
            <div class="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-brand-yellow transition-all duration-300 shadow-xl">
              <img 
                alt="Trust" 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_IdUlI-MmlmgtGYg8K0C5WO6MbDLUMLsY-5aoLoMgVHe_O7CQZzEydYNdAZjT_FaNMMHyX8X8pm0NIiKj_XO3cYiUNfI5WKeSrk4Eeujk30X64IuRcRf9Pd6Jmh_e3BHdDjvBIIR8yEb1AUdhfQ-ULlqVNfBShEDHmLF8p18IjPoPGPqBJchMUJN6oUpJaxwp7FmCa18kCwooAvO6FdaK2-EAJaZ0JWU0JoMSO7GWR78XetzuPLf4Pwnc8MrbFxdUxzZqRdbc-EXa"
                referrerpolicy="no-referrer"
              />
            </div>
            <div class="bg-brand-yellow w-12 h-12 rounded-full flex items-center justify-center -mt-12 mb-4 z-10 shadow-md">
              <mat-icon class="text-brand-dark">verified_user</mat-icon>
            </div>
            <h3 class="font-bold italic text-lg uppercase tracking-tight">100% You Can Trust</h3>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {}
