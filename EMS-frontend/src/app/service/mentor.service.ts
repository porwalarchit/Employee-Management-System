import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  BASE_URL= "http://localhost:8080";

  constructor(private http: HttpClient) { }

  assignMentorToMentee(menteeDetails): Observable<any> {
    return this.http.post<any>(this.BASE_URL + '/api/mentor', menteeDetails);
  }

  getMenteeDetails(mentorId:number){
    return this.http.get<any>(this.BASE_URL + '/api/mentor/' +mentorId);
  }

  addFeedback(feedbackDetails){
    return this.http.post<any>(this.BASE_URL + '/api/mentor/feedback', feedbackDetails);
  }
  
  updateFeedback(updatedfeedbackDetails){
    return this.http.put<any>(this.BASE_URL + '/api/mentor/feedback', updatedfeedbackDetails);
  }
}
