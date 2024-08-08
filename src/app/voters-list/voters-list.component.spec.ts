import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersListComponent } from './voters-list.component';

describe('VotersListComponent', () => {
  let component: VotersListComponent;
  let fixture: ComponentFixture<VotersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotersListComponent]
    });
    fixture = TestBed.createComponent(VotersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
