import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstituencyComponent } from './add-constituency.component';

describe('AddConstituencyComponent', () => {
  let component: AddConstituencyComponent;
  let fixture: ComponentFixture<AddConstituencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddConstituencyComponent]
    });
    fixture = TestBed.createComponent(AddConstituencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
