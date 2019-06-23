import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAddComponent } from './savings-add.component';

describe('SavingsAddComponent', () => {
  let component: SavingsAddComponent;
  let fixture: ComponentFixture<SavingsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
