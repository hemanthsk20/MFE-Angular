import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlightsSearchComponent } from 'projects/mfe1/src/app/flights/flights-search/flights-search.component';
import { PaymentFormComponent } from 'projects/mfe2/src/app/payment/payment-form/payment-form.component';
import { TyriosComponent } from 'projects/tyrios/src/app/tyrios-home/tyrios/tyrios.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [FlightsSearchComponent,PaymentFormComponent, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
