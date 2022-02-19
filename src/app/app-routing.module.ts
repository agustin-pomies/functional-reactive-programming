import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinksCarouselComponent } from './drinks-carousel/drinks-carousel.component';

const routes: Routes = [
  { path: 'drinks-carousel', component: DrinksCarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
