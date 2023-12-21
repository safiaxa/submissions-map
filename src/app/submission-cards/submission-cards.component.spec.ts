import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCardsComponent } from './submission-cards.component';

describe('SubmissionCardsComponent', () => {
  let component: SubmissionCardsComponent;
  let fixture: ComponentFixture<SubmissionCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionCardsComponent]
    });
    fixture = TestBed.createComponent(SubmissionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
