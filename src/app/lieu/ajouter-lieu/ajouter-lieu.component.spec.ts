import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLieuComponent } from './ajouter-lieu.component';

describe('AjouterLieuComponent', () => {
  let component: AjouterLieuComponent;
  let fixture: ComponentFixture<AjouterLieuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterLieuComponent]
    });
    fixture = TestBed.createComponent(AjouterLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
