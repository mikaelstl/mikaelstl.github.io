import { Component } from '@angular/core';

@Component({
  selector: 'simple-title',
  imports: [],
  template: `
    <h2 class="prtfl-simple-title"><ng-content/></h2>
  `,
  styles: `
    .prtfl-simple-title {
      grid-area: prtfl-title;
      color: white;
      font-weight: 600;
    }
  `,
})
export class SimpleTitle {}