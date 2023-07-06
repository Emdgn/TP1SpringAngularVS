import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSolisteComponent } from './modifier-soliste.component';

describe('ModifierSolisteComponent', () => {
  let component: ModifierSolisteComponent;
  let fixture: ComponentFixture<ModifierSolisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierSolisteComponent]
    });
    fixture = TestBed.createComponent(ModifierSolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
