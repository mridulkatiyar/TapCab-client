import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CabService } from "../cab.service";
import { Cab } from "../cab";
import { Router } from '@angular/router';
//import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.css']
})
export class CabListComponent implements OnInit {
  cabs:Observable<Cab[]>;

  constructor(private cabService:CabService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.cabs=this.cabService.getCabList();
  }

   cabDetails(id: number){
     this.router.navigate(['details',id]);
   }

   editCab(id: number){
     this.router.navigate(['update',id]);
   }
   deleteCab(id: number){
     this.cabService.deleteCab(id)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error =>console.log(error));
   }

}
