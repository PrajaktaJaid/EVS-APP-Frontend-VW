import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersListByIdComponent } from './voters-list-by-id.component';

describe('VotersListByIdComponent', () => {
  let component: VotersListByIdComponent;
  let fixture: ComponentFixture<VotersListByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotersListByIdComponent]
    });
    fixture = TestBed.createComponent(VotersListByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
