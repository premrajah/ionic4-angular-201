import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://toriavey.com/images/2011/03/IMG_1544.jpg',
      ingredients: ['Chicken', 'French Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: 'Meatballs',
      imageUrl: 'https://keviniscooking.com/wp-content/uploads/2018/01/How-to-Make-Classic-Beef-Meatballs-square.jpg',
      ingredients: ['Beaf', 'Noodles', 'Pork', 'Salad']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find( recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
