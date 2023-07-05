import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSolisteComponent } from './ajouter-soliste.component';

describe('AjouterSolisteComponent', () => {
  let component: AjouterSolisteComponent;
  let fixture: ComponentFixture<AjouterSolisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterSolisteComponent]
    });
    fixture = TestBed.createComponent(AjouterSolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
