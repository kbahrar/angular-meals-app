import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCardDetailComponent } from './meal-card-detail.component';

describe('MealCardDetailComponent', () => {
  let component: MealCardDetailComponent;
  let fixture: ComponentFixture<MealCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
