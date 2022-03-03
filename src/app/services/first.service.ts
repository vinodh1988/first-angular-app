import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private technology:any={tech:"Java Technology"};
  constructor() { }

  setTechnonology(technology:string):void
  {
     this.technology.tech=technology
  }

  getTechnology():string{
    return this.technology
  }
}
