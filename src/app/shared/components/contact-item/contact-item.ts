import { Component, computed, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { solarIPhoneDuotone, solarLetterDuotone } from '@ng-icons/solar-icons/duotone';
import { hugeGithub } from "@ng-icons/huge-icons";
import { MediumSubtitle } from "../base/medium-subtitle/medium-subtitle";
import { MediumText } from '../base/medium-text/medium-text';

type ContactItemType = 'email' | 'phone' | 'github';

@Component({
  selector: 'contact-item',
  imports: [
    MediumSubtitle,
    NgIcon,
    MediumText
],
  providers: [
    provideIcons({
      solarLetterDuotone,
      solarIPhoneDuotone,
      hugeGithub,
    })
  ],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.scss',
})
export class ContactItem {
  @Input({ required: true }) type: ContactItemType = 'email';
  @Input() title: string = 'default';
  @Input() value: string = 'default';

  readonly icons: Record<ContactItemType, string> = {
    'email':  'solarLetterDuotone',
    'phone':  'solarIPhoneDuotone',
    'github': 'hugeGithub',
  }

  readonly linkType: Record<ContactItemType, (v:string) => string> = {
    'email':  (v) => `mailto:${v}`,
    'phone':  (v) => `tel:${v}`,
    'github': (v) => `https://${v}`,
  }

  get icon() { return this.icons[this.type]; }

  get link() { return this.linkType[this.type]?.(this.value) }
}
