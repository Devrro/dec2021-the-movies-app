import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOptionsComponent } from './movies-options.component';

describe('MoviesOptionsComponent', () => {
  let component: MoviesOptionsComponent;
  let fixture: ComponentFixture<MoviesOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
