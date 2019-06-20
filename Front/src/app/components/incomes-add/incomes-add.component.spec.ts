import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesAddComponent } from './incomes-add.component';

describe('IncomesAddComponent', () => {
  let component: IncomesAddComponent;
  let fixture: ComponentFixture<IncomesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
