import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentPartiesComponent } from './components/student-parties/student-parties.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { GoodiesStockComponent } from './components/goodies-stock/goodies-stock.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-parties', component: StudentPartiesComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'goodies-stock', component: GoodiesStockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}