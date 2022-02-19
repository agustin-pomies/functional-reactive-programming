import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { CocktailViewComponent } from "./cocktail-view/cocktail-view.component";
import { DrinksCarouselComponent } from "./drinks-carousel.component";

@NgModule({
  declarations: [
    DrinksCarouselComponent,
    CocktailViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [DrinksCarouselComponent],
  providers: [],
  bootstrap: []
})
export class DrinksCarouselModule {}
