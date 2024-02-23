import { TestBed } from '@angular/core/testing';

import { TrainerProgressService } from './trainer-progress.service';

describe('TrainerProgressService', () => {
  let service: TrainerProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
