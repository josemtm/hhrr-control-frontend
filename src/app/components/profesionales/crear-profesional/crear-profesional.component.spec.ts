import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProfesionalComponent } from './crear-profesional.component';

describe('CrearProfesionalComponent', () => {
  let component: CrearProfesionalComponent;
  let fixture: ComponentFixture<CrearProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
