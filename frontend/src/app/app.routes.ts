import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartiesComponent } from './components/parties/parties.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { GoodiesComponent } from './components/goodies/goodies.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'goodies', component: GoodiesComponent },
];