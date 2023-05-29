import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';

const CORE_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
] as const;

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(...CORE_MODULES)
  ]
}).catch((err) => console.error(err));
