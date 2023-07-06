import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLieuComponent } from './modifier-lieu.component';

describe('ModifierLieuComponent', () => {
  let component: ModifierLieuComponent;
  let fixture: ComponentFixture<ModifierLieuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierLieuComponent]
    });
    fixture = TestBed.createComponent(ModifierLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
