import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeReportService {
  BASE_URL= "http://localhost:8080";

  constructor(private http: HttpClient, private jwtData: JwtService) { }

  getAllReportsById(empId){
    return this.http.get<any>(this.BASE_URL + '/api/report/all/' +empId);
  }

  addEmployeeReport(reportPayload): Observable<any>{
    // return ;
    return this.http.post<any>(this.BASE_URL + '/api/report/addreport', reportPayload);
  }
}
