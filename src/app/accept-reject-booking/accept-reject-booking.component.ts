import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";

import { BookingsService } from "../bookings.service";
import { Booking } from "../booking";
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accept-reject-booking',
  templateUrl: './accept-reject-booking.component.html',
  styleUrls: ['./accept-reject-booking.component.css']
})
export class AcceptRejectBookingComponent implements OnInit {

  booking:Booking;

  id :number;
  submitted= false;
  bookings: Observable<Booking[]>;

  
  constructor(private route: ActivatedRoute,private router: Router,
    private bookingsService: BookingsService) { }

  ngOnInit(): void {
    
    this.booking = new Booking();
    this.id = this.route.snapshot.params['id'];
    this.booking.bookingId=this.id;
  }

  onSubmit(){
  this.accept();
  }

  
  reloadData(){

    this.bookings = this.bookingsService.getCabBookings();
  }

  gotoList(){
    this.router.navigate(['bookings']);
  }


  accept(){
    this.booking.status="Initiated";

    this.bookingsService.acceptRejectBooking(this.id, this.booking)
    .subscribe(data=> console.log(data), error => console.log(error));
    this.booking= new Booking();
    this.reloadData();
    this.gotoList();
    this.reloadData();

  }
  reject(){

    this.booking.status="Rejected";
    this.booking.cabId=0;
    this.booking.fare=0;

    this.bookingsService.acceptRejectBooking(this.id, this.booking)
    .subscribe(data=> console.log(data), error => console.log(error));
   
    this.booking= new Booking();
    this.reloadData();
    this.gotoList();
    this.reloadData();
  }


}
