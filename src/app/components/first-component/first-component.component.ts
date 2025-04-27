import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component', //esse selector é oque nos permite fazer o importe em app.component.html
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Mateus';
  age: number = 20;
  job = 'Progamming';
  hobbies = ['Correr', 'Jogar', 'Estudar'];

  //objeto em javasript
  car = {
    name: "Polo",
    year: 2019,
  }

  constructor(){

  }

  ngOnInit(): void{

  }
}
