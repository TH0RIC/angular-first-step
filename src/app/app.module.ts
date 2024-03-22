import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/hero/heroes.module';
import { ListModule } from './heroes/list/list.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  /*imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
    ListModule
  ],*/
  imports: [
    CommonModule,
    BrowserModule,
    CounterModule,
    HeroesModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
