import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],//components,directives and pipes
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //services
  bootstrap: [AppComponent] //component that can be referred in main html
})
export class AppModule { }
