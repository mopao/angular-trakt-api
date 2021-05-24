import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchFormComponent } from './movies-search-form.component';

describe('MoviesSearchFormComponent', () => {
  let component: MoviesSearchFormComponent;
  let fixture: ComponentFixture<MoviesSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
