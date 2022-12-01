import { Component, OnInit } from '@angular/core';
import { PROJECT_JEFFERSON } from '../mocks/mocks-project_jefferson';

@Component({
  selector: 'app-area-jefferson',
  templateUrl: './area-jefferson.component.html',
  styleUrls: ['./area-jefferson.component.scss']
})
export class AreaJeffersonComponent implements OnInit {
  data = PROJECT_JEFFERSON;
  constructor() { }

  ngOnInit(): void {
  }

}
