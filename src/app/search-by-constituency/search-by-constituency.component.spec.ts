import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByConstituencyComponent } from './search-by-constituency.component';

describe('SearchByConstituencyComponent', () => {
  let component: SearchByConstituencyComponent;
  let fixture: ComponentFixture<SearchByConstituencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByConstituencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByConstituencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
