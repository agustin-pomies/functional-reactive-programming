import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { combineLatest, interval, Observable } from 'rxjs';
import { debounceTime, map, pluck, repeat, switchMap, take } from 'rxjs/operators';
import { Drink, DrinksReponse } from './drinks';

@Component({
  selector: 'drinks-carousel',
  templateUrl: './drinks-carousel.component.html',
  styleUrls: ['./drinks-carousel.component.css']
})
export class DrinksCarouselComponent {
  private WINDOW_SIZE = 3;
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  public search = new FormControl('');

  private drinks$: Observable<Drink[]> = this.search.valueChanges.pipe(
		debounceTime(500),
    switchMap((searchText) => this.http.get<DrinksReponse>(this.baseUrl + searchText)),
		pluck('drinks'),
  );

  private circularInterval$ = this.drinks$.pipe(
    map(drinks => drinks.length),
    switchMap((length) => 
      interval(2500).pipe(
        take(length),
        repeat(),
      )
    )  
  );

  constructor(private http: HttpClient) {}

  public title = 'Drinks Carousel'
  public drinksCarousel$ = combineLatest([this.drinks$, this.circularInterval$]).pipe(
    map(([drinks, int]) => this.circularWindow(drinks, int, this.WINDOW_SIZE))
  )

  private circularWindow(arr: any[], i: number, size: number): any[] {
    const len = arr.length;
    const init = arr.slice(i, i + size);
    const end = arr.slice(0, Math.max(i + size - len, 0));

    return init.concat(end)
  }
}
