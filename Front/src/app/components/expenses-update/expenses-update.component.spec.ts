import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesUpdateComponent } from './expenses-update.component';

describe('ExpensesUpdateComponent', () => {
  let component: ExpensesUpdateComponent;
  let fixture: ComponentFixture<ExpensesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
