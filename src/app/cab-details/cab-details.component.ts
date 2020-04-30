import { Component, OnInit } from '@angular/core';
import { CabService } from "../cab.service";
import { Cab } from "../cab";
import { Router,ActivatedRoute } from '@angular/router';
import { CabListComponent } from '../cab-list/cab-list.component';

@Component({
  selector: 'app-cab-details',
  templateUrl: './cab-details.component.html',
  styleUrls: ['./cab-details.component.css']
})

export class CabDetailsComponent implements OnInit {

  id: number;
  cab: Cab;

   /**
  *Angular offers ActivatedRoute interface class,
  *it carries the information about a route linked to a component loaded into the Angular app template. 
  *An ActivatedRoute contains the router state tree within the angular app’s memory.
  */

 constructor(private route: ActivatedRoute,private router: Router,
  private cabService: CabService) { }

  ngOnInit(): void {
    this.cab = new Cab();
    this.id =  this.route.snapshot.params['id'];  /* Snapshot is used to get the Route Parameters */
      
    /**
     * As a publisher, you create an Observable instance that defines a subscriber function. 
     * This is the function that is executed when a consumer calls the subscribe() method. 
     * The subscriber function defines how to obtain or generate values or messages to be published.
     */


    this.cabService.getCab(this.id)
    .subscribe(data => {
    console.log(data)
    this.cab = data;
    }, error => console.log(error));
    }
    list(){
      this.router.navigate(['cabs']);
    }
  }