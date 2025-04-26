import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importando componente
import {FirstComponentComponent} from './components/first-component/first-component.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent //declranado compoenente para que seja reconhecido 
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
