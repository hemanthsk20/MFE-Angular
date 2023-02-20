import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { TyriosHomeModule } from './tyrios-home/tyrios-home.module';
import { TyriosComponent } from './tyrios-home/tyrios/tyrios.component';

@NgModule({
  imports: [
    BrowserModule,
    TyriosHomeModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [TyriosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
