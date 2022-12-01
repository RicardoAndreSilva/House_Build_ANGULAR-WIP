import { Injectable } from '@angular/core';
import { ProjectNelson } from ".././interfaces/projectsNelson";
import { PROJECT_NELSON } from "./mocks/mocks-project_nelson"

@Injectable({
  providedIn: 'root'
})
export class ProjectNelsonService {

  constructor() { }
  getProjectsNelson(): ProjectNelson[]{
    return PROJECT_NELSON;
  }

}
