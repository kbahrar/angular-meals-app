import { Component, Input, OnInit } from '@angular/core';
import { Ingredients, Meal } from 'src/app/models/meal.interface';

@Component({
  selector: 'app-meal-card-detail',
  templateUrl: './meal-card-detail.component.html',
  styleUrls: ['./meal-card-detail.component.css']
})
export class MealCardDetailComponent implements OnInit {

  @Input() meal?: Meal;
  @Input() ingredients: Ingredients[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
