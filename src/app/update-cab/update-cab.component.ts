import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { CabService } from "../cab.service";
import { Cab } from "../cab";
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-cab',
  templateUrl: './update-cab.component.html',
  styleUrls: ['./update-cab.component.css']
})
export class UpdateCabComponent implements OnInit {
  id :number;
  cab:  Cab;
  submitted= false;
  cabs: Observable<Cab[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private cabService: CabService) { }

  ngOnInit(): void {


    this.cab = new Cab();
    this.id = this.route.snapshot.params['id'];
     this.cabService.getCab(this.id) .subscribe
     (data => {
        console.log(data)
        this.cab = data; },
         error => console.log(error));
   }

   onSubmit(){
     this.updateProduct();
   }

   reloadData(){
     this.cabs = this.cabService.getCabList();
   }

   gotoList(){
     this.router.navigate(['cabs']);
   }

   updateProduct(){
     this.cabService.updateCab(this.id, this.cab)
     .subscribe(data=> console.log(data), error => console.log(error));
     this.cab= new Cab();
     this.reloadData();
     this.gotoList();
   }

}
