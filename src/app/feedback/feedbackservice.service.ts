import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class FeedbackserviceService {

  constructor(private apiService: ApiService) { }

  SendEmail(feedbackType: string): Observable<any> {
    return this.apiService.get("Feedback/SendEmail", new HttpParams().set("feedbackType", feedbackType));
  }
}
