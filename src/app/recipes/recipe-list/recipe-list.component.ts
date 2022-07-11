import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/OIP.fEuCoQzK9_1NJqPXirMDQgHaLH?pid=ImgDet&rs=1'),
    new Recipe('Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/OIP.fEuCoQzK9_1NJqPXirMDQgHaLH?pid=ImgDet&rs=1'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
