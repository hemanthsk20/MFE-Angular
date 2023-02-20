import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsSearchComponent } from '../flights/flights-search/flights-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './flights-home.component.html',
})
export class FlightsHomeComponent implements OnInit {

  constructor(private router:Router, private flight:FlightsSearchComponent ) { }

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
