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
    this.mealService.getCategoryMeals(name).subscribe(data => this.meals = data.meals);
  }
}
