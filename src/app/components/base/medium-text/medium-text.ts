import { Component } from '@angular/core';

@Component({
  selector: 'medium-text',
  imports: [],
  template: `
    <p class="prtfl-medium-text"><ng-content/></p>
  `,
  styles: `
    .prtfl-medium-text {
      font-size: 16px;
      font-weight: 500;
    }
  `,
})
export class MediumText {}
