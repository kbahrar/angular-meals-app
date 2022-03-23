import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryMealsComponent } from './container/category-meals/category-meals.component';
import { DetailMealComponent } from './container/detail-meal/detail-meal.component';
import { RandomMealsComponent } from './container/random-meals/random-meals.component';

const routes: Routes = [
  { path: '', component: RandomMealsComponent},
  { path: 'category/:name', component: CategoryMealsComponent },
  { path: 'detail/:id', component: DetailMealComponent },
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
