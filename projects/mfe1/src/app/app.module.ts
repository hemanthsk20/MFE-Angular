import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FlightsHomeComponent } from './flights-home/flights-home.component';
import { FlightsModule } from './flights/flights.module';
import { APP_ROUTES } from './app.routes';
import { FlightsSearchComponent } from './flights/flights-search/flights-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FlightsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    FlightsHomeComponent,
    AppComponent,
  ],
  providers: [FlightsSearchComponent],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
