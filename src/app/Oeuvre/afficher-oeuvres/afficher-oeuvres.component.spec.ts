import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherOeuvresComponent } from './afficher-oeuvres.component';

describe('AfficherOeuvresComponent', () => {
  let component: AfficherOeuvresComponent;
  let fixture: ComponentFixture<AfficherOeuvresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherOeuvresComponent]
    });
    fixture = TestBed.createComponent(AfficherOeuvresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
