import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges, OnInit } from '@angular/core';
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
    const token = localStorage.getItem('token');

    let emailPayload = {
        email: this.jwtData.getDecodedData()['sub']
    }

    // Create the request headers with the bearer token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.BASE_URL + '/api/dashboard', emailPayload,{headers});
  }
}
