import { Component } from '@angular/core';

@Component({
  selector: 'highlighted-text',
  imports: [],
  template: `
    <p class="prtfl-highlighted-text"><ng-content/></p>
  `,
  styleUrl: './highlighted-text.scss',
})
export class HighlightedText {}
