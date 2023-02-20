import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { FlightsHomeComponent } from 'projects/mfe1/src/app/flights-home/flights-home.component';
import { PaymentHomeComponent } from 'projects/mfe2/src/app/payment-home/payment-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // // Your route here:
    {
      path: 'flights',
      loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    },
    {
      path: 'payment',
      loadChildren: () => import('mfe2/Module').then(m => m.PaymentModule)
    },
    {
      path: 'mfe1',component: FlightsHomeComponent, pathMatch: 'full'
    },
    {
      path: 'mfe2',component: PaymentHomeComponent,  pathMatch: 'full'
    },
    // {
    //   path: 'tyrios',
    //   loadChildren: () => loadRemoteModule({
    //       remoteEntry: 'http://localhost:7000/remoteEntry.js',
    //       remoteName: 'tyrios',
    //       exposedModule: './Module'
    //     })
    //     .then(m => m.AppModule)
    // },
    // {
    // path: 'payment',
    // loadChildren: () =>
    // loadRemoteModule({
    // type: 'script',
    // remoteEntry:'http://localhost:2000/remoteEntry.js',
    // remoteName: 'mfe2',
    // // The remoteName is defined in the
    // // remote's webpack config
    // exposedModule: './Module'
    // })
    // .then(m => m.PaymentModule)
    // },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

