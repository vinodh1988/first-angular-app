import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
title:string="B O X"
colors=["blue","red","yellow","green","orange"]
styleit:any={backgroundColor: 'yellow',fontFamily: 'arial', color: 'darkred'}
bcolor:string="#297ED2"
temp:string="India"
  constructor() { }

  ngOnInit(): void {
  }

  process(x:string):void
 {
   this.styleit.backgroundColor = x;
 }
}
