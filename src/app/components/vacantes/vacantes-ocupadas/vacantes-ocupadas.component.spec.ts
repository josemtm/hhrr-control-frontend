import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesOcupadasComponent } from './vacantes-ocupadas.component';

describe('VacantesOcupadasComponent', () => {
  let component: VacantesOcupadasComponent;
  let fixture: ComponentFixture<VacantesOcupadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantesOcupadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantesOcupadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
