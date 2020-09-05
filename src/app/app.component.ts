import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AutocompleteService } from './autocomplete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  autocompleteForm: FormGroup;

  constructor(private autocompleteService: AutocompleteService) {}

  public regions$ = this.autocompleteService.autocomplete$;

  ngOnInit(): void {
    this.autocompleteForm = new FormGroup({
      autocomplete: new FormControl('')
    });
  }

  onInput(event: KeyboardEvent): void {
    this.autocompleteService.setAction((event.target as HTMLInputElement).value);
  }
}
