import { Routes } from '@angular/router';
import { FlightsHomeComponent } from './flights-home/flights-home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: FlightsHomeComponent, pathMatch: 'full'},
];
