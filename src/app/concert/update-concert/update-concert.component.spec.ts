import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConcertComponent } from './update-concert.component';

describe('UpdateConcertComponent', () => {
  let component: UpdateConcertComponent;
  let fixture: ComponentFixture<UpdateConcertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateConcertComponent]
    });
    fixture = TestBed.createComponent(UpdateConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
