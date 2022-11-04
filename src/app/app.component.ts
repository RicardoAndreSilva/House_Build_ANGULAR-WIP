import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private router: Router) { }

  goToIndex() {
    this.router.navigate(['/', 'index']);
  }
  goToServices() {
    this.router.navigate(['/', 'services']);
  }
  goToProjects() {
    this.router.navigate(['/', 'projects']);
  }
}
