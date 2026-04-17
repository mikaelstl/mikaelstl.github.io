import { Component } from '@angular/core';

@Component({
  selector: 'simple-text',
  imports: [],
  template: `
    <p class="prtfl-simple-text"><ng-content/></p>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;

      .prtfl-simple-text {
        grid-area: prtfl-simple-text;

        width: 100%;
        height: 100%;
        
        margin: 0;
        
        color: white;
        font-size: 14px;
        font-weight: 300;
        
        overflow: hidden;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  `,
})
export class SimpleText { }
