import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeLinkedin01, hugeInstagram } from "@ng-icons/huge-icons";

type IconBadgeType = 'instagram' | 'linkedin'

@Component({
  selector: 'icon-badge',
  imports: [
    NgIcon
  ],
  providers: [
    provideIcons({
      hugeLinkedin01,
      hugeInstagram
    })
  ],
  templateUrl: './icon-badge.html',
  styleUrl: './icon-badge.scss',
})
export class IconBadge {
  @Input({ required: true }) type: IconBadgeType = 'instagram';

  readonly icons: Record<IconBadgeType, string> = {
    'instagram':  'hugeInstagram',
    'linkedin':  'hugeLinkedin01',
  }

  readonly linkType: Record<IconBadgeType, () => string> = {
    'instagram':  () => `https://instagram.com/mik4el.st_`,
    'linkedin':  () => `https://linkedin.com/in/mikael-stanley-8221531b9/`,
  }

  get icon() { return this.icons[this.type]; }

  get link() { return this.linkType[this.type]?.() }
}
