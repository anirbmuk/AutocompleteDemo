import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { AutocompleteService } from './autocomplete.service';
import { Region } from './region.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  autocompleteForm: FormGroup;

  constructor(private readonly autocompleteService: AutocompleteService) {}

  readonly regions$: Observable<Region[]> = this.autocompleteService.autocomplete$;

  ngOnInit(): void {
    this.autocompleteForm = new FormGroup({
      autocomplete: new FormControl('')
    });
  }

  onInput(event: Event): void {
    this.autocompleteService.setAction((event?.target as HTMLInputElement)?.value);
  }
}
