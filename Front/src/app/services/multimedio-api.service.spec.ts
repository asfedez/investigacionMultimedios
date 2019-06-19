import { TestBed } from '@angular/core/testing';

import { MultimedioApiService } from './multimedio-api.service';

describe('MultimedioApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultimedioApiService = TestBed.get(MultimedioApiService);
    expect(service).toBeTruthy();
  });
});
