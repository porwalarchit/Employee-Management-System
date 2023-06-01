import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }
  BASE_URL = "http://localhost:8080";

  getUserData(){
    const token = localStorage.getItem('token');
    // console.log("TOKEN: ", token);

    // Create the request headers with the bearer token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("HEADER: ", headers);
    return this.http.get(this.BASE_URL + '/api/findAllEmployees', {headers});
  }
}
