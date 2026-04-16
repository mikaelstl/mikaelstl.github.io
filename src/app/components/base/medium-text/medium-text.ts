import { Component } from '@angular/core';

@Component({
  selector: 'medium-text',
  imports: [],
  template: `
    <p class="prtfl-medium-text"><ng-content/></p>
  `,
  styles: `
    .prtfl-medium-text {
      grid-area: medium-text;

      color: white;
      font-size: 14px;
      font-weight: 500;
    }
  `,
})
export class MediumText {}
