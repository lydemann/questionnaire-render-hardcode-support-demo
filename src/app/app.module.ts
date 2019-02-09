import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionComponent } from './questionnaire/question/question.component';
import { QuestionFormGeneratorService } from './questionnaire/questionnaire-section/question-form-generator.service';
import { QuestionnaireSectionComponent } from './questionnaire/questionnaire-section/questionnaire-section.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionnaireSectionComponent,
    QuestionComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [QuestionFormGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
