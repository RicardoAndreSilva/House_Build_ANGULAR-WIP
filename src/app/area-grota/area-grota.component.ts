import { Component, OnInit } from '@angular/core';
import { PROJECT_GROTA } from '../mocks/mocks-project_grota';
@Component({
  selector: 'app-area-grota',
  templateUrl: './area-grota.component.html',
  styleUrls: ['./area-grota.component.scss']
})
export class AreaGrotaComponent implements OnInit {
  data = PROJECT_GROTA;
  constructor() { }

  ngOnInit(): void {
  }

}
