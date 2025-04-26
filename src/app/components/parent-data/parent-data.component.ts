import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  /* **@Input** Passar dados **de um componente pai para um filho** */
  /*
  o fluxo da variavel começa aqui no componente filho e vai ser declarado em app.component.ts
  esse componente é declarado graças o Input
  aqui é declarada a variavel que esta em app.component.ts*/
  @Input() name: string = '';

  /*inicializando um objeto nesse caso colocamos o ponto de "!"
  para dizer que a variavel é falsa, assim vazia, então temos 
  as duas formas de inicializar uma variavel*/
  @Input() userData!: {email: string, role: string}

  constructor() { }

  ngOnInit(): void {
  }

}
