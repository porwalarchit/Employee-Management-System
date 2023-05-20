import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
    
  }
  BASE_URL = "http://localhost:8080";

  login(email: string, password: string){
    return this.http.post(this.BASE_URL + '/api/authenticate', {email, password});
  }
}
