import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  BASE_URL= "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any>{
    return this.http.get<any>(this.BASE_URL + '/api/project');

  }

  addProject(projectDetails): Observable<any> {
    return this.http.post<any>(this.BASE_URL + '/api/project/newproject', projectDetails);
  }
}
