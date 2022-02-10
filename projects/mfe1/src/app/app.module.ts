import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { FlightsModule } from './flights/flights.module';

@NgModule({
  imports: [
    FlightsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
