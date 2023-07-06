import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOeuvreComponent } from './ajouter-oeuvre.component';

describe('AjouterOeuvreComponent', () => {
  let component: AjouterOeuvreComponent;
  let fixture: ComponentFixture<AjouterOeuvreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterOeuvreComponent]
    });
    fixture = TestBed.createComponent(AjouterOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
