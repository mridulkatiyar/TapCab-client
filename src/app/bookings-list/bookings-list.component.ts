import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Observable } from "rxjs";
import { BookingsService } from "../bookings.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {

  booking:Booking;
  bookings:Observable<Booking[]>;
  constructor(private bookingsService:BookingsService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.bookings=this.bookingsService.getCabBookings();
  }


  manageBooking(id: number,status:string){   
    this.booking = new Booking();
   
    this.booking.bookingId=id;
    var index=status.localeCompare("pending");

    if(index==0)
    this.router.navigate(['manage',id]);
  
  }
}
