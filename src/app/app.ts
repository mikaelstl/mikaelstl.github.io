import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from "./components/screen/screen";
import { AbstractCard } from "./components/abstract-card/abstract-card";
import { NavBar } from "./components/nav-menu/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Screen,
    AbstractCard,
    NavBar
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
