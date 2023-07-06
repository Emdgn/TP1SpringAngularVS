import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChefComponent } from './form-chef.component';

describe('FormChefComponent', () => {
  let component: FormChefComponent;
  let fixture: ComponentFixture<FormChefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormChefComponent]
    });
    fixture = TestBed.createComponent(FormChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
