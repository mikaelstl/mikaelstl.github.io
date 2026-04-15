import { Component } from '@angular/core';
import { PhotoCard } from '../photo-card/photo-card';
import { SimpleTitle } from "../base/simple-title/simple-title";
import { Badge } from "../badge/badge";
import { ContactItem } from "../contact-item/contact-item";
import { IconBadge } from "../icon-badge/icon-badge";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { hugeInstagram } from '@ng-icons/huge-icons';

@Component({
  selector: 'abstract-card',
  imports: [
    PhotoCard,
    SimpleTitle,
    Badge,
    ContactItem,
    IconBadge,
  ],
  providers: [
    provideIcons({
      hugeInstagram
    })
  ],
  templateUrl: './abstract-card.html',
  styleUrl: './abstract-card.scss',
})
export class AbstractCard { }
