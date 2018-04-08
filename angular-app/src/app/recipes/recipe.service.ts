import { Injectable} from "@angular/core";

import { Recipe } from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe' ,
      'this is simply a test' ,
      'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
      [
        new Ingredient ('Meat', 1),
        new Ingredient ('French Fries', 20)
      ]),
    new Recipe(
      'a test recipe 2' ,
      'this is simply a test 2' ,
      'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
      [
        new Ingredient ('Buns', 2),
        new Ingredient ('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
