import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question, QuestionSection } from '@app/questionnaire.model';
import { QuestionFormGeneratorService } from './question-form-generator.service';

@Component({
  selector: 'app-questionnaire-section',
  templateUrl: './questionnaire-section.component.html',
  styleUrls: ['./questionnaire-section.component.css']
})
export class QuestionnaireSectionComponent implements OnInit {
  @Input() section: QuestionSection = new QuestionSection();

  get sectionQuestions(): Question[] {
    return this.section.questions;
  }

  constructor(
    private formBuilder: FormBuilder,
    private questionControlService: QuestionFormGeneratorService
  ) {}

  questionsForm: FormGroup;

  saveForm() {
    console.log(this.questionsForm);
  }

  ngOnInit() {
    this.questionsForm = this.questionControlService.getQuestionsFormGroup(
      this.sectionQuestions
    );
  }
}
