import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarVacanteComponent } from './cerrar-vacante.component';

describe('CerrarVacanteComponent', () => {
  let component: CerrarVacanteComponent;
  let fixture: ComponentFixture<CerrarVacanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarVacanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
