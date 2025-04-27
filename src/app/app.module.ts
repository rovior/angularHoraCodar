import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importando componente
import {FirstComponentComponent} from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component'

@NgModule({
  declarations: [
    AppComponent, //declrando compoente para que sea reconhecido
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent //declranado compoenente para que seja reconhecido 
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
