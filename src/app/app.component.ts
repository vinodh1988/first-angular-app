import { Component } from '@angular/core';
import {boxes} from './data/data'
import { FirstService } from './services/first.service';

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
  information:any[]=boxes;
  message:string="Nothing received yet from child"
  technology:any
  constructor(private fs:FirstService ){
    this.technology = this.fs.getTechnology();
  }

  receiveFromChild(message:any):void
  {
    this.message=message.title+" is the course selected and the description is "+
                message.description;
  }
}
