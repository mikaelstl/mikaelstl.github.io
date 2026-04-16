import { Component, Input } from '@angular/core';
import { MediumText } from "../../base/medium-text/medium-text";
import { SimpleText } from "../../base/simple-subtitle/simple-subtitle";
import { HighlightedText } from "../../base/highlighted-text/highlighted-text";

@Component({
  selector: 'resume-item',
  imports: [
    MediumText,
    SimpleText,
    HighlightedText
],
  templateUrl: './resume-item.html',
  styleUrl: './resume-item.scss',
})
export class ResumeItem {

  @Input() title: string = '';

  @Input() info: string = '';

  @Input() description: string = '';

  @Input() track: 'visible' | 'hidden' = 'hidden';

}
