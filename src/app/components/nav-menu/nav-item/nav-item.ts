import { Component, Input, OnInit } from '@angular/core';
import { SimpleText } from "../../base/simple-text/simple-text";
import { ContentPages } from '../nav-bar/nav-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-item',
  imports: [SimpleText],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss',
})
export class NavItem implements OnInit {

  constructor(private router: Router) {}

  @Input() label: string = '';

  @Input() key: ContentPages = 'about';

  visible: boolean = false;

  ngOnInit(): void {
    const actualPage = this.router.url;

    if (this.key === actualPage) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
