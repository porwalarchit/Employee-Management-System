import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private jwtData: JwtService) { 

  }
  BASE_URL = "http://localhost:8080";

  getProfile(){
    const token = localStorage.getItem('token');
    // console.log(token);

    // console.log(this.jwtData.getDecodedData());
    const emailPayload = {
        email: this.jwtData.getDecodedData()['sub']
    }

    // Create the request headers with the bearer token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // console.log("HEADER: ", headers);
    return this.http.post(this.BASE_URL + '/api/dashboard', emailPayload,{headers});
  }
}
