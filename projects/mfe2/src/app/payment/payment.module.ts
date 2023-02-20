import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { RouterModule } from '@angular/router';
import { PAYMENT_ROUTES } from './payment.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PAYMENT_ROUTES)
  ],
  declarations: [
    PaymentFormComponent
  ]
})
export class PaymentModule { }
