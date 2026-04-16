import { Component } from '@angular/core';

@Component({
  selector: 'simple-text',
  imports: [],
  template: `
    <p class="prtfl-simple-text"><ng-content/></p>
  `,
  styles: `
    .prtfl-simple-text {
      grid-area: prtfl-simple-text;

      color: white;
      font-size: 12px;
      font-weight: 300;
    }
  `,
})
export class SimpleText {}
