import { Component, OnInit } from '@angular/core';
import { EventSummary } from './models/eventsummary.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  eventSummary: EventSummary;
  constructor() { }

  ngOnInit() {
console.log("test Commit");
  }

}
