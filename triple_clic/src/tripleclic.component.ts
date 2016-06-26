import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'tripleclic',
  template: `
    <button (click)="handleClick()">Click here 3x times</button>
  `
})
export class TripleClicComponent {
  @Output('tripleclickalias') tripleclick: EventEmitter = new EventEmitter()

  private _count: number = 0

  constructor() {}
  handleClick() {
    if(++this._count % 3 === 0) {
      this.tripleclick.emit(`Awesome, you dude clicked ${this._count} times`)
    }
  }

}