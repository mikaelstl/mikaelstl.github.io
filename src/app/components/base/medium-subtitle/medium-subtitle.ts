import { Component } from '@angular/core';

@Component({
  selector: 'medium-subtitle',
  imports: [],
  template: `
    <p class="prtfl-medium-subtitle"><ng-content/></p>
  `,
  styleUrl: "./medium-subtitle.scss",
})
export class MediumSubtitle {}
