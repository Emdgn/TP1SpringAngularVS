import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierOeuvreComponent } from './modifier-oeuvre.component';

describe('ModifierOeuvreComponent', () => {
  let component: ModifierOeuvreComponent;
  let fixture: ComponentFixture<ModifierOeuvreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierOeuvreComponent]
    });
    fixture = TestBed.createComponent(ModifierOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
