import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/meals.service';
import { Meal } from 'src/app/models/meal.interface';

@Component({
  selector: 'app-random-meals',
  templateUrl: './random-meals.component.html',
  styleUrls: ['./random-meals.component.css']
})
export class RandomMealsComponent implements OnInit {

  meals: Meal[] = [];
  
  constructor(private mealService: MealsService) { }

  ngOnInit(): void {
    this.getRandomMeals(6);
  }

  getRandomMeals(num: number) {
    for (let i = 0; i < num; i++) {
      this.mealService.getRandomMeal().subscribe(data => {this.meals = [...this.meals, data.meals[0]]});
    }
  }
}
