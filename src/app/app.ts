import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from "./components/screen/screen";
import { SimpleTitle } from "./components/base/simple-title/simple-title";
import { SectionTitle } from "./components/base/section-title/section-title";
import { SimpleText } from "./components/base/simple-text/simple-text";
import { MediumText } from "./components/base/medium-text/medium-text";
import { PhotoCard } from "./components/photo-card/photo-card";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Screen,
    SimpleTitle,
    SectionTitle,
    SimpleText,
    MediumText,
    PhotoCard
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
