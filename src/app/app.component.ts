import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AutocompleteService } from './autocomplete.service';
import { Region } from './region.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  readonly autocompleteForm = new FormGroup({
    autocomplete: new FormControl('')
  });

  constructor(private readonly autocompleteService: AutocompleteService) { }

  readonly regions$ = this.autocompleteService.autocomplete$;

  onInput(event: Event): void {
    this.autocompleteService.setAction((event?.target as HTMLInputElement)?.value);
  }

  trackByFn(_: number, region: Region) {
    return region.id;
  }
}
