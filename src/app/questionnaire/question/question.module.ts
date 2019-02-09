import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [QuestionComponent],
  exports: [QuestionComponent]
})
export class QuestionModule {}
