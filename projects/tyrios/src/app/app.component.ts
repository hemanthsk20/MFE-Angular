import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsSearchComponent } from 'projects/mfe1/src/app/flights/flights-search/flights-search.component';
// @NgModule({
//   providers: [FlightsSearchComponent],
// })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FlightsSearchComponent],
})

export class AppComponent {
  title = 'tyrios';
  constructor(private router:Router, private flight:FlightsSearchComponent ) { }
  registerEventListerner(){
    this.flight.show= false;
    console.log(this.flight.show)
  }

}
