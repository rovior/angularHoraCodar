import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importando componente
import {FirstComponentComponent} from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component'

@NgModule({
  declarations: [
    AppComponent, //declrando compoente para que sea reconhecido
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent //declranado compoenente para que seja reconhecido 
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
