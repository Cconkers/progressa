import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { FlightsBuyComponent } from './flights-buy/flights-buy.component';
import { LayoutFlightsComponent } from './layout-flights/layout-flights.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    LayoutFlightsComponent,
    FlightsBuyComponent,
    FlightsSearchComponent
  ]
})
export class FlightsModule { }
