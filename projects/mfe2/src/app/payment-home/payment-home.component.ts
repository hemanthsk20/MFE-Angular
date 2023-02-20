import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentFormComponent } from '../payment/payment-form/payment-form.component';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
})
export class PaymentHomeComponent implements OnInit {

  constructor(private router:Router, public payment:PaymentFormComponent ) { }

  ngOnInit() {
  }
  // registerEventListerner(){
  //   const event = document.querySelector(".listner")
  //   debugger
  //   this.flight.show= true;
  //   event.addEventListener("click", e=>{
  //     this.flight.show= true;
  //   }) 
  //   this.router.navigate(['/flights-search'])
  // }
}
