import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireConcertComponent } from './formulaire-concert.component';

describe('FormulaireConcertComponent', () => {
  let component: FormulaireConcertComponent;
  let fixture: ComponentFixture<FormulaireConcertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireConcertComponent]
    });
    fixture = TestBed.createComponent(FormulaireConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
