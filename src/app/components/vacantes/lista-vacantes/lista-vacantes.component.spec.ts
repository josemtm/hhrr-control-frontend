import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVacantesComponent } from './lista-vacantes.component';

describe('ListaVacantesComponent', () => {
  let component: ListaVacantesComponent;
  let fixture: ComponentFixture<ListaVacantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVacantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
