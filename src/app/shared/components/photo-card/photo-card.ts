import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { solarFileCorruptedBoldDuotone } from "@ng-icons/solar-icons/bold-duotone";

@Component({
  selector: 'photo-card',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      solarFileCorruptedBoldDuotone
    })
  ],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss',
})
export class PhotoCard {
  @Input() image: string = '';
}
