import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
    
  private  recipes:Recipe[] =[
        new Recipe(
          'A First Recipe',
          'This is simply a first recipe',
          'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/14/1/WU1902_Italian-Chicken-Sheet-Pan-Supper_s4x3.jpg.rend.hgtvcom.826.620.suffix/1526332485385.jpeg',
          [
            new Ingredient('Meat',1),
            new Ingredient('Bread',2)
          ]),
        new Recipe(
          'A Second Recipe',
          'This is simply a second recipe',
          'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg',
          [
            new Ingredient('Buns',1),
            new Ingredient('Bread',2)
          ]),
        new Recipe(
          'A Third Recipe',
          'This is simply a third recipe',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH--7rxnhlVH8x62T0TxDkoTEdizFCOTIibpY-XRnUAp5bqfEByw',
          [
            new Ingredient('Cold-Drink',1),
            new Ingredient('Bread',2)
          ]),
        new Recipe(
          'A forth Recipe',
          'This is simply a forth recipe',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV7c7xleWs-cqpwrYJ6Te2TmJTg73HeVclQLJoqalY-veivJrtg',
          [
            new Ingredient('Meat',1),
            new Ingredient('Buns',2)
          ])  
      ];
         
      constructor(private slService:ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredient(ingredients);
      } 
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());

      }
      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}    