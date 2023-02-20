import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TyriosComponent } from './tyrios-home/tyrios/tyrios.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: TyriosComponent,
      pathMatch: 'full'
    },


    // Your route here:

    // {
    //   path: 'flights',
    //   loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    // },

    // {
    //   path: '**',
    //   component: NotFoundComponent
    // }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

