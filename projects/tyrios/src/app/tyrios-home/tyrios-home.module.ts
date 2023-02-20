import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyriosComponent } from './tyrios/tyrios.component';
import { RouterModule } from '@angular/router';
import { TYRIOS_ROUTES } from './tyrios.routes';



@NgModule({
  declarations: [
    TyriosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TYRIOS_ROUTES)
  ]
})
export class TyriosHomeModule { }

