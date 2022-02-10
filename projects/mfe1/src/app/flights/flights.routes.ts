import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { LayoutFlightsComponent } from './layout-flights/layout-flights.component';
import { FlightsBuyComponent } from './flights-buy/flights-buy.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: 'vuelos',
    component: LayoutFlightsComponent,
  },
  {
    path: 'hoteles',
    component: FlightsSearchComponent
  },
  {
    path: 'alquilerCoches',
    component: FlightsBuyComponent
  },
];
