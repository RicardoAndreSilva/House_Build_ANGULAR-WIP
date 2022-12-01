import { Component, OnInit } from '@angular/core';
import { PROJECT_NELSON } from "../mocks/mocks-project_nelson"

@Component({
  selector: 'app-area-nelson',
  templateUrl: './area-nelson.component.html',
  styleUrls: ['./area-nelson.component.scss']
})
export class AreaNelsonComponent implements OnInit {
  data = PROJECT_NELSON;

  constructor() { }

  ngOnInit(): void {

  }

}
