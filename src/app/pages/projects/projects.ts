import { Component } from '@angular/core';
import { SectionTitle } from "../../components/base/section-title/section-title";
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'projects',
  imports: [
    SectionTitle,
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
