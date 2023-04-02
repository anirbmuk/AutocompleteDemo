import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, of } from 'rxjs';
import { switchMap, map, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Region } from './region.interface';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {

  constructor(private readonly http: HttpClient) { }

  private regionsUrl = 'api/regions';

  private actionSubject = new Subject<string | undefined | null>();
  readonly action$ = this.actionSubject.asObservable();

  setAction(input: string): void {
    this.actionSubject.next(input);
  }

  readonly autocomplete$ = this.action$.pipe(
    // Taps the emitted value from action stream
    tap(data => console.log('input:', data)),
    // Wait for 250 ms to allow the user to finish typing
    debounceTime(250),
    // Check if the input has changed from the last emitted value
    distinctUntilChanged(),
    // switchMap fires REST based on above input
    switchMap(input => ((input?.trim()?.length > 1) ? this.http.get<Region[]>(`${this.regionsUrl}\?capital=^${input}`) : of([] as Region[]))
      .pipe(
        // Additional sorting on switchMap output
        map(regions => regions.sort((region1, region2) => region1.capital.localeCompare(region2.capital))),
        // Taps the final emitted value from inner observable
        tap(data => console.log('output:', data))
      )),
  );
}
