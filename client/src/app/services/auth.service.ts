import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient) {}

  dologin(userObj): Observable<any> {
    return this.http.post("/login", userObj, httpOptions);
  }
  checkClientID(userObj): Observable<any> {
    debugger
    return this.http.post("/checkclient", userObj, httpOptions);
  }
  getAllCities(): Observable<any> {

    return this.http.get("/allcities");
  }
  doRegister(ClientObj): Observable<any> {
    debugger
    return this.http.post("/register", ClientObj, httpOptions);
  }
  checkSession(): Promise<any> {
    return new Promise((resolve, reject)=>
    {
        this.http.get("/checkauth").subscribe((data:any)=>
            {
            
                resolve(data.user);
            })
    }); 
  }
}
