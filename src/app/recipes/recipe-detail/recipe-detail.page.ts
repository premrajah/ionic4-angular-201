import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesSercive: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) {
        //re-direct
        return;
      }

      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesSercive.getRecipe(recipeId);
    });
  }

}
