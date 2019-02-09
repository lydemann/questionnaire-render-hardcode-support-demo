import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionnaireRoot } from '@app/questionnaire.model.js';
import * as mockQuestionnaireJson from '../questionnaire-mock.json';
import { QuestionnaireComponent } from '../questionnaire.component.js';
import { QuestionComponent } from './../question/question.component';
import { QuestionFormGeneratorService } from './question-form-generator.service';
import { QuestionnaireSectionComponent } from './questionnaire-section.component';

describe('QuestionnaireSectionComponent', () => {
  let component: QuestionnaireSectionComponent;
  let fixture: ComponentFixture<QuestionnaireSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionnaireSectionComponent,
        QuestionnaireComponent,
        QuestionComponent
      ],
      imports: [BrowserModule, ReactiveFormsModule],
      providers: [QuestionFormGeneratorService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSectionComponent);
    component = fixture.componentInstance;
    component.section = (mockQuestionnaireJson as QuestionnaireRoot).questionnaire.questionSections[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
