import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarProfesionalComponent } from './contactar-profesional.component';

describe('ContactarProfesionalComponent', () => {
  let component: ContactarProfesionalComponent;
  let fixture: ComponentFixture<ContactarProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactarProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactarProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
