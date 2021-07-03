import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, map, tap, debounceTime } from 'rxjs/operators';

import { Region } from './region.interface';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {

  constructor(private http: HttpClient) {}

  private regionsUrl = 'api/regions';

  private actionSubject = new BehaviorSubject<string>('');
  readonly action$ = this.actionSubject.asObservable();

  public setAction(input: string): void {
    this.actionSubject.next(input);
  }

  readonly autocomplete$: Observable<Region[]> = this.action$.pipe(
    // Taps the emitted value from action stream
    tap((data: string) => console.log('input:', data)),
    // Wait for 250 ms to allow the user to finish typing
    debounceTime(250),
    // switchMap fires REST based on above input
    switchMap(input => ((!!input && input.trim().length > 1) ? this.http.get<Region[]>(`${this.regionsUrl}\?capital=^${input}`) : of([]))
    .pipe(
      // Additional sorting on switchMap output
      map((regions: Region[]) => regions.sort((region1, region2) => region1.capital.localeCompare(region2.capital))),
      // Taps the final emitted value from inner observable
      tap((data: Region[]) => console.log('output:', data))
    )),
  );

}
