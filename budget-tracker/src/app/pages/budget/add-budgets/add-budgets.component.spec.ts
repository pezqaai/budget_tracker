import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetsComponent } from './add-budgets.component';

describe('AddBudgetsComponent', () => {
  let component: AddBudgetsComponent;
  let fixture: ComponentFixture<AddBudgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBudgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
