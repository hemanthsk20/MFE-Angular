import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PaymentModule } from './payment/payment.module';
import { APP_ROUTES } from './app.routes';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';

@NgModule({
  imports: [
    BrowserModule,
    PaymentModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    PaymentHomeComponent,
    AppComponent,
  ],
  providers: [PaymentFormComponent],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
