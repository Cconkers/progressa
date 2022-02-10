import { Routes } from '@angular/router';
import { LayoutFlightsComponent } from './flights/layout-flights/layout-flights.component';

export const APP_ROUTES: Routes = [
    { path: '', component: LayoutFlightsComponent, pathMatch: 'full'}];
