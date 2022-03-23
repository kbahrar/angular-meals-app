import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MealsService } from 'src/app/meals.service';
import { Meal } from 'src/app/models/meal.interface';

@Component({
  selector: 'app-category-meals',
  templateUrl: './category-meals.component.html',
  styleUrls: ['./category-meals.component.css']
})
export class CategoryMealsComponent implements OnInit {

  private categories = ['Beef', 'Chicken', 'Vegetarian', 'Dessert']
  category: string = '';
  meals: Meal[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mealService: MealsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.checkRoute(params['name']);
      this.getMeals(this.category);
    });
  }

  private checkRoute(name: string | null): void {
    if (name && this.categories.some(item => item === name))
      this.category = name;
    else
      this.location.back();
  }

  private getMeals(name: string): void {
    this.mealService.getCategoryMeals(name).subscribe(data => this.meals = this.getRandomMeals(data.meals));
  }

  private getRandomMeals(meals: Meal[]): Meal[] {
    const newMeals = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = this.getRandomNum(meals.length - 1);
      newMeals.push(meals[randomNum]);
    }
    return newMeals;
  }

  private getRandomNum(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
