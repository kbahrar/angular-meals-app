export interface Meal {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strArea: string,
    strMealThumb: string
}

export interface Meals {
    meals: Meal[];
}