import { Component, Input,Output, OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() title=""
@Input() description=""
@Output('receive') sendMessage:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handle():void{
     this.sendMessage.emit("The selected course is "+this.title)
  }
}
