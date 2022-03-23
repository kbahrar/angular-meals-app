export interface Meal {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strArea: string,
    strMealThumb: string,
    strInstructions: string
}

export interface Meals {
    meals: Meal[];
}

export interface Ingredients {
    name: string,
    mesure: string
}