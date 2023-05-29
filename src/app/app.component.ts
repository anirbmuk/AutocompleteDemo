import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

import { ProductService } from './product.service';
import { Product } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  readonly autocompleteForm = new UntypedFormGroup({
    autocomplete: new UntypedFormControl('')
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
