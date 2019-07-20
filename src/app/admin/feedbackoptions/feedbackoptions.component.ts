import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService, SelectItem } from 'primeng/primeng';

import { FeedbackOptionsService } from './feedbackoptions.service';
import { OutreachFeedbackOption } from './feedbackoptions.model';
import { QuestionslistComponent } from '../questions/questionslist/questionslist.component';
import { QuestionsService } from '../questions/questions.service';

@Component({
  selector: 'app-feedbackoptions',
  templateUrl: './feedbackoptions.component.html',
  styleUrls: ['./feedbackoptions.component.css']
})
export class FeedbackoptionsComponent {

  feedbackTypes: SelectItem[];
  selectedfbtype: string;
  questions: SelectItem[];
  selectedQuestion: number;
  outreachFeedbackOptionList: OutreachFeedbackOption[];
  submitted: boolean;
  newRecord: boolean;
  displayAddDialog: boolean;
  displayDeleteDialog: boolean = false;
  visible: boolean = true;
  headername: string;
  outreachFeedbackOption: OutreachFeedbackOption = new OutreachFeedbackOption();
  infomessage: Message[] = [];
  errormessage: Message[] = [];

  constructor(private feedbackOptionsService: FeedbackOptionsService, private confirmationService: ConfirmationService,
    private questionsService: QuestionsService) { }

  ngOnInit() {
    this.getFeedbackOptionsList();
    this.getFeedbackType();
    this.getQuestionsDropDownList();
  }

  getFeedbackOptionsList() {
    this.feedbackOptionsService.getFeedbackOptionsList()
      .subscribe(
        data => {
          if (data != null) {
            this.outreachFeedbackOptionList = data;
          } else {
            this.infomessage = [];
            this.infomessage.push({ severity: 'info', summary: '', detail: 'No Records Found' });
          }
        },
        error => alert(error));
  }

  showDialogToAdd() {
    this.clearControls();
    this.newRecord = true;
    this.outreachFeedbackOption = new OutreachFeedbackOption();
    this.displayAddDialog = true;
    this.headername = 'Add New Question';
  }

  showDialogtoUpdate(currentRowData) {
    this.clearControls();
    this.newRecord = false;
    this.displayAddDialog = true;
    this.headername = 'Edit User Group';
    currentRowData = Object.assign({}, currentRowData);
    this.outreachFeedbackOption = currentRowData;
    this.selectedQuestion = currentRowData.QuestionID;
    this.selectedfbtype = currentRowData.Feedback_Type;
  }

  showDialogtoDelete(currentRowData) {
    this.displayDeleteDialog = true;
    this.infomessage = [];
    this.errormessage = [];
    this.outreachFeedbackOption = currentRowData;

    this.confirmationService.confirm({
      message: 'Do you want to delete?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.deleteFeedbackOption();
      }
    });
  }

  public saveFeedbackOption() {
    if (this.newRecord === true) {
      this.outreachFeedbackOption.QuestionID = this.selectedQuestion;
      this.outreachFeedbackOption.Feedback_Type = this.selectedfbtype;
      this.feedbackOptionsService.addFeedbackOption(this.outreachFeedbackOption).subscribe(
        data => {
          if (data != null) {
            this.displayAddDialog = false;
            this.getFeedbackOptionsList();
            this.infomessage = [];
            this.infomessage.push({ severity: 'success', summary: '', detail: 'Feedback Option Saved Sucessfully' });
          }
        });
    } else {
      this.feedbackOptionsService.updateFeedbackOption(this.outreachFeedbackOption).subscribe(
        data => {
          if (data != null) {
            this.displayAddDialog = false;
            this.getFeedbackOptionsList();
            this.infomessage = [];
            this.infomessage.push({ severity: 'success', summary: '', detail: 'Feedback Option Updated Sucessfully' });

          } else {
            this.errormessage = [];
            this.errormessage.push({ severity: 'error', summary: '', detail: data });
          }
        });
    }
  }

  private deleteFeedbackOption() {
    this.displayDeleteDialog = false;
    this.feedbackOptionsService.deleteFeedbackOption(this.outreachFeedbackOption.FeedbackOptionID).subscribe(
      data => {
        if (data != null) {
          this.getFeedbackOptionsList();
          this.infomessage = [];
          this.infomessage.push({ severity: 'success', summary: '', detail: 'Feedback Option Deleted Successfully' });
        } else {
          this.infomessage = [];
          this.infomessage.push({ severity: 'error', summary: '', detail: data });
        }
      }, error => alert(error));
  }

  getFeedbackType() {
    this.feedbackTypes = [
      { label: 'Unregistered Associates', value: 'Unregistered Associates' },
      { label: 'Registered and did not participate', value: 'Registered and did not participate' },
      { label: 'Registered and Participated Associates', value: 'Registered and Participated Associates' }
    ];
  }

  getQuestionsDropDownList() {
    this.questions = [];
    this.questionsService.getFeedbackQuestionsList().subscribe(questdata => {
      for (let quest = 0; quest < questdata.length; quest++) {
        this.questions.push({ label: questdata[quest].QuestionName, value: questdata[quest].QuestionID });
      }
    });
  }

  private clearControls() {
    this.selectedfbtype = null;
    this.selectedQuestion = null;
    this.infomessage = [];
    this.errormessage = [];
  }
}

