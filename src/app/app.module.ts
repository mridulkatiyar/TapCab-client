import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddCabComponent } from './add-cab/add-cab.component';
import { CabDetailsComponent } from './cab-details/cab-details.component';
import { CabListComponent } from './cab-list/cab-list.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { AcceptRejectBookingComponent } from './accept-reject-booking/accept-reject-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AddCabComponent,
    CabDetailsComponent,
    CabListComponent,
    UpdateCabComponent,
    PassengerListComponent,
    BookingsListComponent,
    AcceptRejectBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
