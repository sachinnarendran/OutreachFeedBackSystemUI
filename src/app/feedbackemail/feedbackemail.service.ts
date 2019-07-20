import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackemailService {

  constructor(private apiService: ApiService) { }

  getFeedbackOptionsList(feedbackType: string): Observable<any> {
    return this.apiService.get("Feedback/GetFeedbackOptionsList", new HttpParams().set("feedbackType", feedbackType));
  }
}
