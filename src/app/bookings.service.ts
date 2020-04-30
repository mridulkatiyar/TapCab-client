import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookingsService {
  private baseUrl='http://localhost:8080/TapCab/bookingsApi/listCabBooking';
 
  constructor(private http:HttpClient) { }
  
  getCabBookings():Observable<any>{   //call get method of Cab
    return this.http.get(`${this.baseUrl}`);
  }

  
  acceptRejectBooking(id:number,value:any) :Observable<Object>{   //Accept Reject And Set Booking Fare And Status
    return this.http.put(`${this.baseUrl}/${id}`,value);  
  }  
    
}


