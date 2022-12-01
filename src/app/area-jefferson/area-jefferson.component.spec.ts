import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaJeffersonComponent } from './area-jefferson.component';

describe('AreaJeffersonComponent', () => {
  let component: AreaJeffersonComponent;
  let fixture: ComponentFixture<AreaJeffersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaJeffersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaJeffersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
