import { Component, Input } from '@angular/core';

@Component({
  selector: 'cocktail-view',
  templateUrl: './cocktail-view.component.html',
  styleUrls: ['./cocktail-view.component.css']
})
export class CocktailViewComponent {
  @Input() img!: string;
  @Input() name!: string;
  @Input() glass!: string;
  @Input() instructions!: string;

  constructor() {}
}
