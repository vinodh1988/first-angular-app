import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  org:string = 'firstapp';
  team:string[]=["Joseph","John","Ajay","Arun","Bose"]
  fontFamily="Arial"
  color="#102E4B"
  backgroundColor="#0A66BE"
  fonts=["Arial","Agency FB","Comic Sans MS","Courier","Times New Roman","Forte"]
}
