import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverdueComponent } from './loan-overdue.component';

describe('LoanOverdueComponent', () => {
  let component: LoanOverdueComponent;
  let fixture: ComponentFixture<LoanOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
