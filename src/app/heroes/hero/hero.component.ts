import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {

    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 25;
  }

  resetForm() {
    this.name = 'Ironman';
    this.age = 35;
  }
}
