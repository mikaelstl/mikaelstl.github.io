import { Component, inject, signal } from '@angular/core';
import { PhotoCard } from '../photo-card/photo-card';
import { SimpleTitle } from "../base/simple-title/simple-title";
import { Badge } from "../badge/badge";
import { ContactItem } from "../contact-item/contact-item";
import { IconBadge } from "../icon-badge/icon-badge";
import { provideIcons, NgIcon } from "@ng-icons/core";
import { hugeInstagram } from '@ng-icons/huge-icons';
import { ResponsiveService } from '@services/reponsive.service';
import { solarAltArrowDownDuotone, solarAltArrowUpDuotone } from '@ng-icons/solar-icons/duotone';

@Component({
  selector: 'abstract-card',
  imports: [
    PhotoCard,
    SimpleTitle,
    Badge,
    ContactItem,
    IconBadge,
    NgIcon
],
  providers: [
    provideIcons({
      hugeInstagram,
      solarAltArrowDownDuotone,
      solarAltArrowUpDuotone
    })
  ],
  templateUrl: './abstract-card.html',
  styleUrl: './abstract-card.scss',
})
export class AbstractCard {
  private readonly responsive: ResponsiveService = inject(ResponsiveService)

  isMobile = this.responsive.isMobile;

  isVisible = signal(false);

  showContent() {
    this.isVisible.update(value => !value);
  }
}
