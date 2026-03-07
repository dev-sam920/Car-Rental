import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header';
import { HeroComponent } from './hero';
import { BookingWidgetComponent } from './booking-widget';
import { FeaturesComponent } from './features';
import { FleetComponent } from './fleet';
import { PromoComponent } from './promo';
import { ShowcaseComponent } from './showcase';
import { StatsComponent } from './stats';
import { TestimonialsComponent } from './testimonials';
import { ContactSectionComponent } from './contact-section';
import { FooterComponent } from './footer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    BookingWidgetComponent,
    FeaturesComponent,
    FleetComponent,
    PromoComponent,
    ShowcaseComponent,
    StatsComponent,
    TestimonialsComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
