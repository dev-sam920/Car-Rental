import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Car {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  transmission: string;
  fuel: string;
  seats: number;
}

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <section id="fleet" class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="max-w-xl">
            <h2 class="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] mb-4">Our Premium Fleet</h2>
            <h3 class="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight italic uppercase">
              Choose Your <span class="text-brand-yellow">Perfect</span> Ride
            </h3>
          </div>
          
          <!-- Filter Tabs -->
          <div class="flex flex-wrap gap-2">
            @for (filter of filters; track filter) {
              <button 
                (click)="activeFilter.set(filter)"
                [class]="activeFilter() === filter ? 'bg-brand-yellow text-brand-dark' : 'bg-white text-gray-500 hover:bg-gray-100'"
                class="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                {{ filter }}
              </button>
            }
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (car of filteredCars(); track car.id) {
            <div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <!-- Car Image -->
              <div class="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  [src]="car.image" 
                  [alt]="car.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerpolicy="no-referrer"
                />
                <div class="absolute top-4 right-4 bg-brand-dark text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {{ car.type }}
                </div>
              </div>

              <!-- Car Details -->
              <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="text-2xl font-bold text-brand-dark mb-1">{{ car.name }}</h4>
                    <div class="flex items-center gap-4 text-gray-400 text-sm">
                      <span class="flex items-center gap-1"><mat-icon class="text-sm h-4 w-4">settings</mat-icon> {{ car.transmission }}</span>
                      <span class="flex items-center gap-1"><mat-icon class="text-sm h-4 w-4">local_gas_station</mat-icon> {{ car.fuel }}</span>
                      <span class="flex items-center gap-1"><mat-icon class="text-sm h-4 w-4">person</mat-icon> {{ car.seats }} Seats</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div>
                    <span class="text-3xl font-black text-brand-dark">£{{ car.price }}</span>
                    <span class="text-gray-400 text-sm font-semibold"> / Day</span>
                  </div>
                  <button class="bg-brand-yellow text-brand-dark p-3 rounded-xl hover:bg-brand-dark hover:text-white transition-colors duration-300">
                    <mat-icon>arrow_forward</mat-icon>
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
        
        <div class="mt-16 text-center">
          <button class="border-2 border-brand-dark text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300 uppercase tracking-widest text-sm italic">
            View All Vehicles
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FleetComponent {
  filters = ['All', 'Luxury', 'SUV', 'Sport', 'Electric'];
  activeFilter = signal('All');

  cars: Car[] = [
    {
      id: 1,
      name: 'Mercedes G-Class',
      type: 'SUV',
      price: 250,
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800',
      transmission: 'Auto',
      fuel: 'Petrol',
      seats: 5
    },
    {
      id: 2,
      name: 'BMW M4 Competition',
      type: 'Sport',
      price: 180,
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800',
      transmission: 'Auto',
      fuel: 'Petrol',
      seats: 4
    },
    {
      id: 3,
      name: 'Tesla Model S Plaid',
      type: 'Electric',
      price: 220,
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
      transmission: 'Auto',
      fuel: 'Electric',
      seats: 5
    },
    {
      id: 4,
      name: 'Range Rover Vogue',
      type: 'SUV',
      price: 210,
      image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800',
      transmission: 'Auto',
      fuel: 'Diesel',
      seats: 5
    },
    {
      id: 5,
      name: 'Porsche 911 Carrera',
      type: 'Sport',
      price: 300,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      transmission: 'PDK',
      fuel: 'Petrol',
      seats: 2
    },
    {
      id: 6,
      name: 'Audi A8 L',
      type: 'Luxury',
      price: 190,
      image: 'https://images.unsplash.com/photo-1606148632359-54133b009e41?auto=format&fit=crop&q=80&w=800',
      transmission: 'Auto',
      fuel: 'Hybrid',
      seats: 5
    }
  ];

  filteredCars = () => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.cars;
    return this.cars.filter(car => car.type === filter);
  };
}
