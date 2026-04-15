import { Component } from '@angular/core';

@Component({
  selector: 'simple-subtitle',
  imports: [],
  template: `
    <p class="prtfl-simple-subtitle"><ng-content/></p>
  `,
  styleUrl: './simple-subtitle.scss',
})
export class SimpleText {}
