import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'cg-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.styl']
})
export class PreviewComponent implements OnInit {

  data = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.data = JSON.stringify(this.recipeService.getRecipe());
  }

}
