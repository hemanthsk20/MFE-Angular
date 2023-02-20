import { Routes } from '@angular/router';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { LazyComponent } from './lazy/lazy.component';

export const PAYMENT_ROUTES: Routes = [
    {
      path: 'payment-form',
      component: PaymentFormComponent
    },
    {
      path: 'lazy',
      component: LazyComponent
    }
];
