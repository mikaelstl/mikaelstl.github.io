import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from "./shared/components/screen/screen";
import { AbstractCard } from "./shared/components/abstract-card/abstract-card";
import { NavBar } from "./shared/components/nav-menu/nav-bar/nav-bar";

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
