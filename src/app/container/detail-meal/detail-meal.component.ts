import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from 'src/app/meals.service';
import { Ingredients, Meal, Meals } from 'src/app/models/meal.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-meal',
  templateUrl: './detail-meal.component.html',
  styleUrls: ['./detail-meal.component.css']
})
export class DetailMealComponent implements OnInit {

  meal?: Meal;
  ingredients: Ingredients[] = [];

  constructor(
    private mealService: MealsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const paramId = Number(params["id"]);
      this.getMealById(paramId);
    })
  }

  private getMealById(id: number): void {
    this.mealService.getMealById(id).subscribe(data => {
      if (data.meals === null)
        this.location.back();
      this.meal = data.meals[0];
      this.getIngredientsMesures(data.meals[0]);
    })
  }

  private getIngredientsMesures(meal: Meal): void {
    const keyIng = 'strIngredient';
    const keyMes = 'strMeasure';

    if (meal) {
      for (let i = 1; i <= 20; i++) {
        if (meal[keyIng + i as keyof Meal]) {

          const ingred: Ingredients = {
            name: meal[keyIng + i as keyof Meal],
            mesure: meal[keyMes + i as keyof Meal]
          }

          this.ingredients = [...this.ingredients, ingred];
        }
        else
          break ;
      }
    }

  }
}
