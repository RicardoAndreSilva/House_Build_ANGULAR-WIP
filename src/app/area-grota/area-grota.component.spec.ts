import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaGrotaComponent } from './area-grota.component';

describe('AreaGrotaComponent', () => {
  let component: AreaGrotaComponent;
  let fixture: ComponentFixture<AreaGrotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaGrotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaGrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
