import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { SimpleText } from "../base/simple-text/simple-text";
import { solarCode2Duotone } from '@ng-icons/solar-icons/duotone';
import { solarCalendarMarkBoldDuotone } from '@ng-icons/solar-icons/bold-duotone';
import { hugeGitBranch } from '@ng-icons/huge-icons';

type LabelTypes = 'tech' | 'branch' | 'date';

@Component({
  selector: 'project-badge',
  imports: [
    NgIcon,
    SimpleText
  ],
  providers: [
    provideIcons({
      solarCode2Duotone,
      solarCalendarMarkBoldDuotone,
      hugeGitBranch
    })
  ],
  templateUrl: './project-badge.html',
  styleUrl: './project-badge.scss',
})
export class ProjectBadge {

  @Input() type: LabelTypes = 'tech';
  
  @Input() label: string = '';

  readonly icons: Record<LabelTypes, string> = {
    'tech':   'solarCode2Duotone',
    'branch': 'hugeGitBranch',
    'date':   'solarCalendarMarkBoldDuotone',
  }

  get icon() { return this.icons[this.type] }
}
