import { Component, Input, OnInit } from '@angular/core';
import { MediumText } from "@components/base/medium-text/medium-text";
import { SimpleText } from "@components/base/simple-text/simple-text";
import { ProjectBadge } from "@components/project-badge/project-badge";
import formatTitle from '@utils/formatTitle';
import formatDate from '@utils/formatDate';

@Component({
  selector: 'project-card',
  imports: [
    MediumText,
    SimpleText,
    ProjectBadge,
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard implements OnInit {
  @Input() link:string = '';

  @Input() name:string = '';

  @Input() description:string = '';

  @Input() tech:string = '';

  @Input() updated_at:Date | null = null;

  formattedTitle: string = '';
  formattedDate: string = '';

  ngOnInit(): void {
    this.formattedTitle = formatTitle(this.name);
    this.formattedDate = formatDate(this.updated_at)
  }
  
}
