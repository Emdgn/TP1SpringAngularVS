import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSolisteComponent } from './liste-soliste.component';

describe('ListeSolisteComponent', () => {
  let component: ListeSolisteComponent;
  let fixture: ComponentFixture<ListeSolisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSolisteComponent]
    });
    fixture = TestBed.createComponent(ListeSolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
