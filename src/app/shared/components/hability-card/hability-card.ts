import { Component, Input } from '@angular/core';
import { SimpleText } from "../base/simple-text/simple-text";
import { MediumText } from "../base/medium-text/medium-text";

@Component({
  selector: 'hability-card',
  imports: [
    SimpleText,
    MediumText
],
  templateUrl: './hability-card.html',
  styleUrl: './hability-card.scss',
})
export class HabilityCard {
  @Input() title:string = '';
  @Input() description:string = '';
}
