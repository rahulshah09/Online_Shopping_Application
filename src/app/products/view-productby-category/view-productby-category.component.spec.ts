import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductbyCategoryComponent } from './view-productby-category.component';

describe('ViewProductbyCategoryComponent', () => {
  let component: ViewProductbyCategoryComponent;
  let fixture: ComponentFixture<ViewProductbyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductbyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductbyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
