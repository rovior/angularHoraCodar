import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: boolean = false;

  constructor(){}


  showMessage(): void{
    this.show = true;
  }

}
