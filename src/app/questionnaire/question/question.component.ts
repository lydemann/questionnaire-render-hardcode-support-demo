import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '@app/questionnaire.model';
import { HardcodedQuestionService } from '../hardcoded-questions/hardcoded-questions.service';
import { RenderingTranslationService } from './rendering-translation.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [RenderingTranslationService]
})
export class QuestionComponent implements OnInit {
  @Input() question = new Question();
  @Input() form: FormGroup;

  get isValid() {
    return this.form.get(this.question.externalQuestionId).valid;
  }

  constructor(
    private renderingTranslationService: RenderingTranslationService,
    private hardcodedQuestionService: HardcodedQuestionService
  ) {}

  getQuestionRendering(question: Question) {
    return this.renderingTranslationService.getRenderingForQuestion(question);
  }

  getTemplateRefForQuestion(questionId: string) {
    const templateRef = this.hardcodedQuestionService.hardcodedQuestionsMap.get(
      questionId
    );
    return templateRef;
  }

  ngOnInit() {}
}
