import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNelsonComponent } from './area-nelson.component';

describe('AreaNelsonComponent', () => {
  let component: AreaNelsonComponent;
  let fixture: ComponentFixture<AreaNelsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaNelsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaNelsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
