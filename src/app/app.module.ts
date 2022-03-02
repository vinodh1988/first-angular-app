import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],//components,directives and pipes
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //services
  bootstrap: [AppComponent] //component that can be referred in main html
})
export class AppModule { }
