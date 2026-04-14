import { Component } from '@angular/core';

@Component({
  selector: 'simple-title',
  imports: [],
  template: `
    <h3 class="prtfl-simple-title"><ng-content/></h3>
  `,
  styles: `
    .prtfl-simple-title {
      font-size: 18px;
      font-weight: 600;
    }
  `,
})
export class SimpleTitle {}