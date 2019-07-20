import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FeedbackemailService } from './feedbackemail.service';
import { OutreachFeedbackOption } from '../admin/feedbackoptions/feedbackoptions.model';

@Component({
  selector: 'app-feedbackemail',
  templateUrl: './feedbackemail.component.html',
  styleUrls: ['./feedbackemail.component.css']
})
export class FeedbackemailComponent {

  feedbackType: string;
  private result: any;
  feedbackOptionsList: OutreachFeedbackOption[];

  constructor(private feedbackemailService: FeedbackemailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.result = this.route.params.subscribe(params => {
      this.feedbackType = params['feedbackType'];
    });
    this.getFeedbackOptionsList();
  }

  getFeedbackOptionsList() {
    this.feedbackemailService.getFeedbackOptionsList(this.feedbackType).subscribe(list => { this.feedbackOptionsList = list });
  }
}
