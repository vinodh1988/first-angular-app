import { Component, Input,Output, OnInit ,EventEmitter} from '@angular/core';
interface course{
  title:string;
  description:string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title=""
@Input() description=""
@Output('receive') sendMessage:EventEmitter<course>=new EventEmitter<course>();
  constructor() { }

  ngOnInit(): void {
  }

  handle():void{
     this.sendMessage.emit({title:this.title,description:this.description})
  }
}
