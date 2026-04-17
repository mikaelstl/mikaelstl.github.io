import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { SimpleText } from "../../base/simple-text/simple-text";
import { solarCaseMinimalisticDuotone, solarFileTextDuotone, solarInfoCircleDuotone } from '@ng-icons/solar-icons/duotone';
import { NavItem } from "../nav-item/nav-item";
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    NgIcon,
    NavItem
  ],
  providers: [
    provideIcons({
      solarInfoCircleDuotone,
      solarFileTextDuotone,
      solarCaseMinimalisticDuotone
    })
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {}
