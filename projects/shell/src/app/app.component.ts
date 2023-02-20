import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsSearchComponent } from 'projects/mfe1/src/app/flights/flights-search/flights-search.component';
import { SharedLibService } from 'projects/shared-lib/src/projects';
import { ListenersService } from 'projects/tyrios/listeners.service';
import { HomeComponent } from 'projects/tyrios/src/app/home/home.component';
// @NgModule({
//   providers: [FlightsSearchComponent],
// })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'shell';
  constructor(public router:Router, private flight:FlightsSearchComponent, private listenerService: SharedLibService) {
    listenerService.createListener("shell","initialize",{});

   }
  // registerEventListerner(){
  //   // const event = document.querySelector(".listner")
  //   this.flight.show= false;
  //   console.log(this.flight.show)
  //   // event.addEventListener("click", e=>{
  //   //   this.flight.show= true;
  //   // }) 
  //   //  this.listnerService.callListener("shell","myEvent",{})
  //   // window.tyriosEventManager.callListener("mfe1","myEvent",{});
  // }

}


// window.tyriosEventManager = { 
//   eventRegistry:{},
//   createListener: function(module, event, initialValue) {
//     if (!this.eventRegistry[module]) {
//       this.eventRegistry[module] =  {};
//     }
//      if (!this.eventRegistry[module][event]) {
//       this.eventRegistry[module][event] =  {initialValue: initialValue,"listeners":[]};
//      } else {
//         alert("event "+module+"::"+event+" is already created");
//      }
//   },
//   registerListener: function(module, event, callback) {
//      if (!this.eventRegistry[module][event]) {
//       alert("event "+module+"::"+event+" is not created so far.");
//      }
//      this.eventRegistry[module][event]["listeners"].push(callback);
//   },
//   callListener: function(module, event, obj) {
//       if (this.eventRegistry[module][event]) {
//           let initialValue = this.eventRegistry[module][event]["initialValue"];
//           for(let i=0;i<this.eventRegistry[module][event]["listeners"].length;i++) {
//              initialValue= this.eventRegistry[module][event]["listeners"][i](initialValue, obj);
//           }
//           return initialValue;
//       }
//   }
// };