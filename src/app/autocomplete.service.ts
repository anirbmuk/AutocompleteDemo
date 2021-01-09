import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, of } from 'rxjs';
import { switchMap, map, tap, debounceTime } from 'rxjs/operators';

import { Region } from './region.interface';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {

  constructor(private http: HttpClient) {}

  private regionsUrl = 'api/regions';
  private actionSubject = new BehaviorSubject<string>('');

  public action$ = this.actionSubject.asObservable();

  public autocomplete$ = this.action$.pipe(
    // Taps the emitted value from action stream
    tap(data => console.log('input:', data)),
    // wait for 250 ms to allow the user to finish typing
    debounceTime(250),
    // switchMap fires REST based on above input
    switchMap(input => ((!!input && input.trim().length > 1) ? this.http.get<Region[]>(`${this.regionsUrl}\?city=^${input}`) : of([])).pipe(
      // Additional sorting on switchMap output
      map((regions: Region[]) => regions.sort((region1, region2) => region1.city.localeCompare(region2.city))),
      // Taps the final emitted value from inner observable
      tap(data => console.log('output:', data))
    )),
  );

  public setAction(input: string): void {
    this.actionSubject.next(input);
  }

}
