import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShinyButtonComponent } from './shiny-button/shiny-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ShinyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
