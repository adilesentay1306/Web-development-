import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// Здесь регистрируем глобальные провайдеры:
// provideRouter — включает систему роутинга с нашими маршрутами
// provideHttpClient — включает HttpClient для HTTP запросов
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ]
};
