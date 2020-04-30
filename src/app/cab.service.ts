import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';

@Injectable({
  
  providedIn: 'root'
})
export class CabService {
  
  private baseUrl='http://localhost:8080/TapCab/api/listCab';
  constructor(private http:HttpClient) { }

  getCabList():Observable<any>{   //call get method of product
    return this.http.get(`${this.baseUrl}`);
  }

  getCab(id: number): Observable<any> {
   return this.http.get(`${this.baseUrl}/${id}`);
   }

   newCab(cab: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cab);
   }

  updateCab(id:number,value:any): Observable<Object>
   {
     return this.http.put(`${this.baseUrl}/${id}`,value);
   }
   deleteCab(id:number): Observable<any>
   {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
   }

}
