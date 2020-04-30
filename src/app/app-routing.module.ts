import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabListComponent } from './cab-list/cab-list.component';
import { AddCabComponent } from './add-cab/add-cab.component';
import { CabDetailsComponent } from './cab-details/cab-details.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { AcceptRejectBookingComponent } from './accept-reject-booking/accept-reject-booking.component';





const routes: Routes =[

  { path: '', redirectTo: 'cab', pathMatch: 'full' },
  { path: 'cabs', component: CabListComponent },
  { path: 'add', component: AddCabComponent },
  { path: 'details/:id', component: CabDetailsComponent },
  { path: 'update/:id', component: UpdateCabComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'passengers', component: PassengerListComponent },
  { path: 'bookings', component: BookingsListComponent },
  { path: 'manage/:id', component: AcceptRejectBookingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
