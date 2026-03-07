import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <section id="contact" class="py-24 bg-brand-dark text-white relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-24 bg-white curve-bottom"></div>
      
      <div class="container mx-auto px-4 relative z-10 mt-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Contact Info -->
          <div>
            <h2 class="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 class="text-4xl md:text-6xl font-extrabold leading-tight italic uppercase mb-8">
              Ready to <span class="text-brand-yellow">Start</span> Your Journey?
            </h3>
            <p class="text-gray-400 text-lg mb-12 max-w-md">
              Our premium support team is available 24/7 to assist you with your luxury car rental needs.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-center gap-6">
                <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <mat-icon class="text-brand-yellow">phone</mat-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p class="text-xl font-bold">07012069711</p>
                </div>
              </div>
              
              <div class="flex items-center gap-6">
                <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <mat-icon class="text-brand-yellow">email</mat-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p class="text-xl font-bold">hello&#64;carrental.luxury</p>
                </div>
              </div>
              
              <div class="flex items-center gap-6">
                <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <mat-icon class="text-brand-yellow">location_on</mat-icon>
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Our Office</p>
                  <p class="text-xl font-bold">Ikeja, Lagos</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-white rounded-3xl p-8 md:p-12 text-brand-dark shadow-2xl">
            <h4 class="text-2xl font-bold mb-8">Send us a Message</h4>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label for="contactName" class="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input id="contactName" type="text" formControlName="name" placeholder="" class="bg-gray-50 border-none rounded-xl py-4 px-6 text-sm font-semibold focus:ring-2 focus:ring-brand-yellow">
                </div>
                <div class="flex flex-col gap-2">
                  <label for="contactEmail" class="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input id="contactEmail" type="email" formControlName="email" placeholder="@gmail.com" class="bg-gray-50 border-none rounded-xl py-4 px-6 text-sm font-semibold focus:ring-2 focus:ring-brand-yellow">
                </div>
              </div>
              
              <div class="flex flex-col gap-2">
                <label for="contactSubject" class="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <input id="contactSubject" type="text" formControlName="subject" placeholder="Rental Inquiry" class="bg-gray-50 border-none rounded-xl py-4 px-6 text-sm font-semibold focus:ring-2 focus:ring-brand-yellow">
              </div>
              
              <div class="flex flex-col gap-2">
                <label for="contactMessage" class="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea id="contactMessage" formControlName="message" rows="4" placeholder="How can we help you?" class="bg-gray-50 border-none rounded-xl py-4 px-6 text-sm font-semibold focus:ring-2 focus:ring-brand-yellow resize-none"></textarea>
              </div>
              
              <button type="submit" [disabled]="contactForm.invalid" class="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  private fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact Form Submitted:', this.contactForm.value);
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
    }
  }
}
