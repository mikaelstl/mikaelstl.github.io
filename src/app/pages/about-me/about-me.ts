import { Component } from '@angular/core';
import { SectionTitle } from "@components/base/section-title/section-title";
import { SimpleText } from "@components/base/simple-text/simple-text";
import { SimpleTitle } from "@components/base/simple-title/simple-title";
import { HabilityCard } from "@components/hability-card/hability-card";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { solarIPhoneBoldDuotone, solarSidebarCodeBoldDuotone, solarWindowFrameBoldDuotone } from '@ng-icons/solar-icons/bold-duotone';

@Component({
  selector: 'about-me',
  imports: [
    SectionTitle,
    SimpleText,
    SimpleTitle,
    HabilityCard,
    NgIcon
  ],
  providers: [
    provideIcons({
      solarWindowFrameBoldDuotone,
      solarSidebarCodeBoldDuotone,
      solarIPhoneBoldDuotone
    })
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe { }
