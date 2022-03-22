import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomMealsComponent } from './container/random-meals/random-meals.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { CategoryMealsComponent } from './container/category-meals/category-meals.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomMealsComponent,
    MealCardComponent,
    CategoryMealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
