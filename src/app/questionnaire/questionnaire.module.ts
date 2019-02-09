import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HardcodedQuestionsComponent } from './hardcoded-questions/hardcoded-questions.component';
import { QuestionModule } from './question/question.module';
import { QuestionnaireSectionComponent } from './questionnaire-section/questionnaire-section.component';
import { QuestionnaireComponent } from './questionnaire.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, QuestionModule],
  declarations: [
    QuestionnaireComponent,
    QuestionnaireSectionComponent,
    HardcodedQuestionsComponent
  ],
  exports: [QuestionnaireComponent]
})
export class QuestionnaireModule {}
