import { Component } from '@angular/core';
import { MediumText } from "../base/medium-text/medium-text";
import { SimpleText } from "../base/simple-text/simple-text";
import { ProjectBadge } from "../project-badge/project-badge";

@Component({
  selector: 'project-card',
  imports: [
    MediumText,
    SimpleText,
    ProjectBadge
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {}
