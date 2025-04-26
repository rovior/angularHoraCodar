import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component', //esse selector é oque nos permite fazer o importe em app.component.html
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(){

  }

  ngOnInit(): void{

  }
}
