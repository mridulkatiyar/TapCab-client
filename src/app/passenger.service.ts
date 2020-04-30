import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private baseUrl='http://localhost:8080/TapCab/PassengerApi/listPassenger';
  constructor(private http:HttpClient) { }


  getPassengerList():Observable<any>{   //call get method of product
    return this.http.get(`${this.baseUrl}`);
  }



  deletePassenger(phoneNo:string): Observable<any>
  {
   return this.http.delete(`${this.baseUrl}/${phoneNo}`,{responseType:'text'});
  }
}
