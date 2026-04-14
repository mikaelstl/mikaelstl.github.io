import { Component } from '@angular/core';

@Component({
  selector: 'section-title',
  imports: [],
  template: `
    <h1 class="prtfl-section-title"><ng-content/></h1>
  `,
  styles: `
    .prtfl-section-title {
      font-weight: 600;
    }
  `,
})
export class SectionTitle {}
