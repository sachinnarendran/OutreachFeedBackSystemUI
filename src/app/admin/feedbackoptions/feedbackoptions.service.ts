import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { OutreachFeedbackOption } from './feedbackoptions.model';

@Injectable()
export class FeedbackOptionsService {

  constructor(private apiService: ApiService) {
  }

  getFeedbackOptionsList(): Observable<any> {
    return this.apiService.get("FeedbackOptions/GetFeedbackOptionsList");
  }

  addFeedbackOption(outreachFeedbackOption: OutreachFeedbackOption): Observable<any> {
    return this.apiService.post("FeedbackOptions/SaveFeedbackOptions", outreachFeedbackOption);
  }

  updateFeedbackOption(outreachFeedbackOption: OutreachFeedbackOption): Observable<any> {
    return this.apiService.put("FeedbackOptions/UpdateFeedbackOptions", outreachFeedbackOption);
  }

  deleteFeedbackOption(feedbackOptionID: number): Observable<any> {
    return this.apiService.delete("FeedbackOptions/DeleteFeedbackOptions", new HttpParams().set("feedbackOptionID", feedbackOptionID.toString()));
  }
}
