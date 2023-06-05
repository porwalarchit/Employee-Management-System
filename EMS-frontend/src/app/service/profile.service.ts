import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{

  BASE_URL = "http://localhost:8080";

  constructor(private http: HttpClient, private jwtData: JwtService) { 
  }

  
  getProfile(): Observable<any> {
    let emailPayload = {
        email: jwt_decode(localStorage.getItem('token'))['sub']
      }
      

    return this.http.post<any>(this.BASE_URL + '/api/dashboard', emailPayload);
  }
}
