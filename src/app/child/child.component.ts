import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
title:string="B O X"
colors=["blue","red","yellow","green","orange"]
styleit:any={backgroundColor: 'yellow',fontFamil: 'arial', color: 'darkred'}
  constructor() { }

  ngOnInit(): void {
  }

  process(x:string):void
 {
   this.styleit.backgroundColor = x;
 }
}
