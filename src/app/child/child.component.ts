import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
title:string="B O X"
styleit:object={backgroundColor: 'yellow',fontFamil: 'arial', color: 'darkred'}
  constructor() { }

  ngOnInit(): void {
  }

}
