import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { JwtService } from './jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService{

  BASE_URL = "http://localhost:8080";

  constructor(private http: HttpClient, private jwtData: JwtService) { 
  }
  addDetails(newDetails): Observable<any>{
    return this.http.post<any>(this.BASE_URL + '/api/employeedetails/add', newDetails);
  }
  
  updateProfile(updatedDetails): Observable<any> {
    return this.http.put<any>(this.BASE_URL + '/api/employeedetails/update', updatedDetails);
  }
  
}
