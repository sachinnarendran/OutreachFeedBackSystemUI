import { Component, OnInit, Input } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/primeng';

import { QuestionsService } from '../questions.service';
import { OutreachFeedbackQuestion } from '../questions.model';

@Component({
  selector: 'app-questionslist',
  templateUrl: './questionslist.component.html',
  styleUrls: ['./questionslist.component.css']
})
export class QuestionslistComponent {

  outreachFeedbackQuestionList: OutreachFeedbackQuestion[];
  cols: any[];
  submitted: boolean;
  newQuestion: boolean;
  displayAddDialog: boolean;
  displayDeleteDialog: boolean = false;
  visible: boolean = true;
  headername: string;
  outreachFeedbackQuestion: OutreachFeedbackQuestion = new OutreachFeedbackQuestion();
  infomessage: Message[] = [];
  errormessage: Message[] = [];
  
  constructor(private questionsService: QuestionsService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getFeedbackQuestionsList();
  }

  getFeedbackQuestionsList() {
    this.questionsService.getFeedbackQuestionsList()
      .subscribe(
        data => {
          if (data != null) {
            this.outreachFeedbackQuestionList = data;
            for (let cl = 0; cl < this.outreachFeedbackQuestionList.length; cl++) {
              this.cols = [
                { field: this.outreachFeedbackQuestionList[cl].QuestionID, header: 'Question ID' },
                { field: this.outreachFeedbackQuestionList[cl].QuestionName, header: 'Question Name' },
                { field: this.outreachFeedbackQuestionList[cl].Created_By, header: 'Created By' },
                { field: this.outreachFeedbackQuestionList[cl].Created_Date, header: 'Created Date' }
              ];
            }
          } else {
            this.infomessage = [];
            this.infomessage.push({ severity: 'info', summary: '', detail: 'No Records Found' });
          }
        },
        error => alert(error));
  }

  showDialogToAddQuestion() {
    this.clearControls();
    this.newQuestion = true;
    this.outreachFeedbackQuestion = new OutreachFeedbackQuestion();
    this.displayAddDialog = true;
    this.headername = 'Add New Question';
  }

  showDialogtoUpdate(currentRowData) {
    this.clearControls();
    this.newQuestion = false;
    this.displayAddDialog = true;
    this.headername = 'Edit User Group';
    currentRowData = Object.assign({}, currentRowData);
    this.outreachFeedbackQuestion = currentRowData;
  }

  showDialogtoDelete(currentRowData) {
    this.displayDeleteDialog = true;
    this.infomessage = [];
    this.errormessage = [];
    this.outreachFeedbackQuestion = currentRowData;

    this.confirmationService.confirm({
      message: 'Do you want to delete the question - ' + this.outreachFeedbackQuestion.QuestionName + '?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.deleteQuestion();
      }
    });
  }

  public saveQuestion() {
    if (this.newQuestion === true) {
      if (this.outreachFeedbackQuestion.QuestionName != null && this.outreachFeedbackQuestion.QuestionName !== '') {
        this.questionsService.addFeedbackQuestion(this.outreachFeedbackQuestion).subscribe(
          data => {
            if (data != null) {
              this.displayAddDialog = false;
              this.getFeedbackQuestionsList();
              this.infomessage = [];
              this.infomessage.push({ severity: 'success', summary: '', detail: 'Feedback Question Saved Sucessfully' });
            }
          });
      } else {
        this.errormessage = [];
        this.errormessage.push({ severity: 'error', summary: '', detail: 'Question Name is required' });
      }
    } else {
      this.questionsService.updateFeedbackQuestion(this.outreachFeedbackQuestion).subscribe(
        data => {
          if (data != null) {
            this.displayAddDialog = false;
            this.getFeedbackQuestionsList();
            this.infomessage = [];
            this.infomessage.push({ severity: 'success', summary: '', detail: 'Feedback Question Updated Sucessfully' });

          } else {
            this.errormessage = [];
            this.errormessage.push({ severity: 'error', summary: '', detail: data });
          }
        });
    }
  }

  private deleteQuestion() {
    this.displayDeleteDialog = false;
    this.questionsService.deleteFeedbackQuestion(this.outreachFeedbackQuestion.QuestionID).subscribe(
      data => {
        if (data != null) {
          this.getFeedbackQuestionsList();
          this.infomessage = [];
          this.infomessage.push({ severity: 'success', summary: '', detail: 'Feedback Question Deleted Successfully' });
        } else {
          this.infomessage = [];
          this.infomessage.push({ severity: 'error', summary: '', detail: data });
        }
      }, error => alert(error));
  }

  private clearControls() {
    this.infomessage = [];
    this.errormessage = [];
  }
}
