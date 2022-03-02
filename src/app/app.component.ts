import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  org:string = 'firstapp';
  team:string[]=["Joseph","John","Ajay","Arun","Bose"]
}
