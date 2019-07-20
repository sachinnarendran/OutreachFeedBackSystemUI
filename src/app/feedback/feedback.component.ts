import { Component, OnInit } from '@angular/core';
import { SelectItem, Message } from 'primeng/primeng';
import { FeedbackserviceService } from './feedbackservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackTypes: SelectItem[];
  selectedfbtype: string;
  infomessage: Message[] = [];
  errorMessage: Message[] = [];

  constructor(private feedbackserviceService: FeedbackserviceService) { }

  ngOnInit() {
    this.getFeedbackType();
  }

  SendEmail() {
    this.feedbackserviceService.SendEmail(this.selectedfbtype)
      .subscribe(
        data => {
          if (data != null) {
            this.infomessage = [];
            this.infomessage.push({ severity: 'info', summary: '', detail: data });
          } else {
            this.errorMessage = [];
            this.errorMessage.push({ severity: 'error', summary: '', detail: data });
          }
        },
        error => alert(error));
  }

  getFeedbackType() {
    this.feedbackTypes = [
      { label: 'Unregistered Associates', value: 'Unregistered Associates' },
      { label: 'Registered and did not participate', value: 'Registered and did not participate' },
      { label: 'Registered and Participated Associates', value: 'Registered and Participated Associates' }
    ];
  }
}
