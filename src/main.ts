// main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { withFetch } from '@angular/common/http';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

provideHttpClient();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => withFetch())
  .catch(err => console.error(err));
