import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.interface';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input() meals: Meal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
