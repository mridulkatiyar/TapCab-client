import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PassengerService } from "../passenger.service";
import { Passenger } from "../passenger";
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  passengers:Observable<Passenger[]>;


  constructor(private passengerService:PassengerService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.passengers=this.passengerService.getPassengerList();
  }
  deletePassenger(phoneNo: string){
    this.passengerService.deletePassenger(phoneNo)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error =>console.log(error));
  }

}
