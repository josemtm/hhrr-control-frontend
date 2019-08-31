import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVacanteComponent } from './crear-vacante.component';

describe('CrearVacanteComponent', () => {
  let component: CrearVacanteComponent;
  let fixture: ComponentFixture<CrearVacanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVacanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
