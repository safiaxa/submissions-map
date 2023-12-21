// submission-cards.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submission-cards',
  templateUrl: './submission-cards.component.html',
  styleUrls: ['./submission-cards.component.css']
})
export class SubmissionCardsComponent {
  @Input() submissionCards: any[] = [];
  today: Date = new Date();
}



