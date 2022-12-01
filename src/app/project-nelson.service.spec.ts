import { TestBed } from '@angular/core/testing';

import { ProjectNelsonService } from './project-nelson.service';

describe('ProjectNelsonService', () => {
  let service: ProjectNelsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectNelsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
