import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, of } from 'rxjs';
import { switchMap, map, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Product } from './product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  private productsUrl = 'https://dummyjson.com/products';

  private actionSubject = new Subject<string | undefined | null>();
  readonly action$ = this.actionSubject.asObservable();

  setAction(input: string): void {
    this.actionSubject.next(input);
  }

  readonly products$ = this.action$.pipe(
    // Taps the emitted value from action stream
    tap(data => console.log('input:', data)),
    // Wait for 250 ms to allow the user to finish typing
    debounceTime(250),
    // Check if the input has changed from the last emitted value
    distinctUntilChanged(),
    // switchMap fires REST based on above input
    switchMap(input => ((input?.trim()?.length > 1) ? this.http.get<{ products: Product[] }>(`${this.productsUrl}/search?q=${input.toLowerCase()}`) : of({ products: [] }))
      .pipe(
        // Additional sorting on switchMap output
        map(({ products }) => products.sort((product1, product2) => product1.title.localeCompare(product2.title))),
        // Taps the final emitted value from mapping transformation
        tap(products => console.log('products:', products)),
      )),
  );
}
