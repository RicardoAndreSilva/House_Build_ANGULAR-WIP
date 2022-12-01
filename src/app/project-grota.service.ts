import { Injectable } from '@angular/core';
import { ProjectGrota } from 'src/interfaces/projectsGrota';
import { PROJECT_GROTA } from './mocks/mocks-project_grota';

@Injectable({
  providedIn: 'root'
})
export class ProjectGrotaService {

  constructor() { }
  getProjectsGrota(): ProjectGrota[]{
    return PROJECT_GROTA;
  }
}
