import { Routes } from '@angular/router';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { PaymentHomeComponent } from './payment-home/payment-home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: PaymentHomeComponent, pathMatch: 'full'},
];
