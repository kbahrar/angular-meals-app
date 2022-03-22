import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Meal, Meals } from './models/meal.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private URL = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getRandomMeal(): Observable<Meals> {
    return this.http.get<Meals>(this.URL + 'random.php');
  }
}
