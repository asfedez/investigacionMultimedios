import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesUpdateComponent } from './incomes-update.component';

describe('IncomesUpdateComponent', () => {
  let component: IncomesUpdateComponent;
  let fixture: ComponentFixture<IncomesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
