import { Region } from './region.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {

  constructor(private http: HttpClient) {}

  private regionsUrl = 'api/regions';
  private actionSubject = new BehaviorSubject<string>('');

  public action$ = this.actionSubject.asObservable();

  public autocomplete$ = this.action$.pipe(
    switchMap(input => ((!!input && input.trim().length > 1) ?
                           this.http.get<Region[]>(`${this.regionsUrl}\?city=^${input}`) :
                           of([])))
  );

  public setAction(input: string): void {
    this.actionSubject.next(input);
  }

}
