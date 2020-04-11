import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOutstandingComponent } from './loan-outstanding.component';

describe('LoanOutstandingComponent', () => {
  let component: LoanOutstandingComponent;
  let fixture: ComponentFixture<LoanOutstandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOutstandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
