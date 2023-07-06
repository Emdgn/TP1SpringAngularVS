import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLieuxComponent } from './afficher-lieux.component';

describe('AfficherLieuxComponent', () => {
  let component: AfficherLieuxComponent;
  let fixture: ComponentFixture<AfficherLieuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherLieuxComponent]
    });
    fixture = TestBed.createComponent(AfficherLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
