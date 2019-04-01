import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  CartEventEmitter : EventEmitter<any> = new EventEmitter();
  CartStateEventEmitter : EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

getAllCategories(): Observable<any> {
  return this.http.get("/allcategories");
}
getCategoryProductsByID(CategoryID): Observable<any> {
  return this.http.post("/getproducts",CategoryID,httpOptions);
}
getUserCart(UserID): Observable<any> {
  
  return this.http.post("/getusercart",{id:UserID},httpOptions);
}
createNewCart(UserID): Observable<any> {
  
  return this.http.post("/createcart",{id:UserID},httpOptions);
}

}
