import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { ProductService } from './product.service';
import { Product } from './product.interface';

const CORE_MODULES = [CommonModule, ReactiveFormsModule] as const;
const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, MatAutocompleteModule];

@Component({
  standalone: true,
  imports: [...CORE_MODULES, ...MATERIAL_MODULES],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  readonly autocompleteForm = new FormGroup<{ autocomplete: FormControl<string | null | undefined> }>({
    autocomplete: new FormControl('')
  });

  constructor(private readonly productService: ProductService) { }

  readonly products$ = this.productService.products$;

  onInput(event: Event): void {
    this.productService.setAction((event?.target as HTMLInputElement)?.value);
  }

  trackByFn(_: number, product: Product) {
    return product.id;
  }
}
