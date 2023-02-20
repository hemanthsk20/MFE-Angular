import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedLibService } from 'projects/shared-lib/src/projects';
import { ListenersService } from 'projects/tyrios/listeners.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html'
})
export class PaymentFormComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;
  show:boolean;
  
  constructor(@Inject(Injector) private injector,
  @Inject(ComponentFactoryResolver) private cfr,
 public router:Router, private listenerService: SharedLibService) {
      // listenerService.registerListener("shell","initialize",function(value,obj) {
      //   debugger
      //   console.log(value +""+ obj);
      // });

      // listenerService.callListener("shell","initialize",{});
     }

  search(): void {
    // alert('Not implemented for this demo!');
  }

  terms(): void {
    import('../lazy/lazy.component')
      .then(m => m.LazyComponent)
      .then(comp => {
        const factory = this.cfr.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, null, this.injector);
      });

  }


}
