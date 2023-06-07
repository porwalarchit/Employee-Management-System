import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService{

  BASE_URL = "http://localhost:8080";

  constructor(private http: HttpClient, private jwtData: JwtService) { 
  }

  
  registerUser(newUser): Observable<any> {
    console.log(newUser);
    
    return this.http.post<any>(this.BASE_URL + '/api/addEmployee', newUser);
  }
}
