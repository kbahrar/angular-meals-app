import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Meals } from './models/meal.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private URL = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getRandomMeal(): Observable<Meals> {
    const url = this.URL + 'random.php';
    return this.http.get<Meals>(url);
  }

  getCategoryMeals(name: string): Observable<Meals> {
    const url = this.URL + 'filter.php?c=' + name;
    return this.http.get<Meals>(url);
  }

  getMealById(id: number): Observable<Meals> {
    const url = this.URL + 'lookup.php?i=' + id;
    return this.http.get<Meals>(url);
  }
}
