import { Component } from '@angular/core';

@Component({
  selector: 'section-title',
  imports: [],
  template: `
    <h1 class="prtfl-section-title"><ng-content/></h1>
    <div class="title-detail"></div>
  `,
  styleUrl: './section-title.scss',
})
export class SectionTitle {}
