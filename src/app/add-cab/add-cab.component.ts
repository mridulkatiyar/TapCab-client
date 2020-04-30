import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CabService } from "../cab.service";
import { Cab } from "../cab";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-cab',
  templateUrl: './add-cab.component.html',
  styleUrls: ['./add-cab.component.css']
})


export class AddCabComponent implements OnInit {
  cab: Cab = new Cab();
  submitted = false;

  constructor(private cabService: CabService,
    private router:Router) { }

  ngOnInit(): void {
  }
  newProduct(): void {
    this.submitted = false;
    this.cab= new Cab();
    }
    
    save() {
    this.cabService.newCab(this.cab)
    .subscribe(data => console.log(data), error => console.log(error));
    this.cab= new Cab();
    }
    
    onSubmit() {
    this.submitted = true;
    this.save();
    }
    
    gotoList() {
    this.router.navigate(['cabs']);
    }
}
