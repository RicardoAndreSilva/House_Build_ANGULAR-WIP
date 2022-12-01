import { TestBed } from '@angular/core/testing';

import { ProjectGrotaService } from './project-grota.service';

describe('ProjectGrotaService', () => {
  let service: ProjectGrotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectGrotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
