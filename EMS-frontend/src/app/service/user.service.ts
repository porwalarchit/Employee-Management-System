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
    return this.http.get(this.BASE_URL + '/api/findAllEmployees');
  }
}
