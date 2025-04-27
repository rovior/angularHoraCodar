import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  //aqui decidimos se aquela mensagem vai ser ocuta (false) e como esta true vai aparecer
  canShow: boolean = true

  //observe isso 
  name = 'João';

  constructor() { }

  ngOnInit(): void {
  }

}
