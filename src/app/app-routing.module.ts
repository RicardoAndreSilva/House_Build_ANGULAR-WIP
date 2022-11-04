import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ServicesComponent} from './services/services.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
