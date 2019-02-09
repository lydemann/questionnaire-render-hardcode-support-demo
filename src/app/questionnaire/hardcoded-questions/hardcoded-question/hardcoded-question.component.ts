import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@app/questionnaire.model';

@Component({
  selector: 'app-hardcoded-question',
  templateUrl: './hardcoded-question.component.html',
  styleUrls: ['./hardcoded-question.component.scss']
})
export class HardcodedQuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() {}

  ngOnInit() {}
}
