import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedQuestionService {
  hardcodedQuestionsMap = new Map<string, TemplateRef<any>>();

  constructor() {}
}
