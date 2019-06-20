import { TestBed } from '@angular/core/testing';

import { ExpensesServiceService } from './expenses-service.service';

describe('ExpensesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesServiceService = TestBed.get(ExpensesServiceService);
    expect(service).toBeTruthy();
  });
});
