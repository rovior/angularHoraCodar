import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
/*criando um estilo que vai ser usado em directives.component.html*/
  size = 40;
  font = 'Arial';
  color = 'red' ;

  //agora vamos criar agora um estilo como se fosse para uma classe e usar em directives.component.html onde essas duas variaveis dentro dessa classe são duas classes que podem ser editadas, isso funciona como um array de classes assim podemos atribuir varias classes em uma so tag
  classes = ['green-title', 'small-title'];

  //essa classe pode ser editada no css tambem aqui ela foi declarada
  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
