import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
    <hr>
    <p>Bienvenidos a Angular {{counter}}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public title : string = 'Hola'
  public counter : number = 10

  increaseBy(value : number) : number {

    return this.counter+=value;
  }

  resetCounter() : void {

    this.counter  = 10;
  }

}
