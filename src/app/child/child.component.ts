import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
title:string="B O X"
colors=["blue","red","yellow","green","orange"]



@Input() fcolor:string="";
@Input() bcolor:string="";
@Input('fontname') ffamily:string="";

styleit:any={backgroundColor: 'yellow',fontFamily: this.ffamily, color: this.fcolor}

temp:string="India"
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
     this.styleit= {backgroundColor: 'yellow',fontFamily: this.ffamily, color: this.fcolor}
  }

  process(x:string):void
 {
   this.styleit.backgroundColor = x;
 }
}
