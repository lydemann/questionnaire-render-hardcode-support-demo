import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { HardcodedQuestionService as HardcodedQuestionsService } from './hardcoded-questions.service';

@Component({
  selector: 'app-hardcoded-questions',
  templateUrl: './hardcoded-questions.component.html',
  styleUrls: ['./hardcoded-questions.component.scss']
})
export class HardcodedQuestionsComponent implements AfterViewInit {
  @ViewChild('questionToBeHardCoded') questionToBeHardCoded: TemplateRef<any>;

  constructor(
    private hardcodedQuestionsMapService: HardcodedQuestionsService
  ) {}

  ngAfterViewInit(): void {
    this.hardcodedQuestionsMapService.hardcodedQuestionsMap.set(
      'questionToBeHardCoded',
      this.questionToBeHardCoded
    );
  }
}
