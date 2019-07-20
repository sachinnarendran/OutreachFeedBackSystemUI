import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

import { OutreachFeedbackQuestion } from './questions.model';

@Injectable()
export class QuestionsService {

  constructor(private apiService: ApiService) {
  }

  getFeedbackQuestionsList(): Observable<any> {
    return this.apiService.get("Questions/GetFeedbackQuestionsList");
  }

  addFeedbackQuestion(outreachFeedbackQuestion: OutreachFeedbackQuestion): Observable<any> {
    return this.apiService.post("Questions/SaveFeedbackQuestions", outreachFeedbackQuestion);
  }

  updateFeedbackQuestion(outreachFeedbackQuestion: OutreachFeedbackQuestion): Observable<any> {
    return this.apiService.put("Questions/UpdateFeedbackQuestions", outreachFeedbackQuestion);
  }

  deleteFeedbackQuestion(questionId: number): Observable<any> {
    return this.apiService.delete("Questions/DeleteFeedbackQuestions", new HttpParams().set("questionId", questionId.toString()));
  }
}
