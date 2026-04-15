import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SimpleText } from "../../base/simple-text/simple-text";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

type ContentPages = 'about' | 'resume' | 'projects'

@Component({
  selector: 'nav-item',
  imports: [SimpleText, RouterLink, RouterLinkActive],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.scss',
})
export class NavItem {

  constructor(private router: Router) {}

  @Input() label: string = '';

  @Input() key: ContentPages = 'about';

  go(page: ContentPages) {
    this.router.navigate([`${page}`]);
  }
}
