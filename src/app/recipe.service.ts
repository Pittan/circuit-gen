import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  public recipe: any = null;

  constructor() {
    const data =  window.localStorage.getItem('recipe');
    this.recipe = JSON.parse(data);
  }

  setRecipe(recipe) {
    this.recipe = recipe;
    window.localStorage.setItem('recipe', JSON.stringify(recipe));
  }

  getRecipe() {
    return this.recipe || null;
  }

}
