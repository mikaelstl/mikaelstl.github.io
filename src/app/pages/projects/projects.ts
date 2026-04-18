import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SectionTitle } from "@components/base/section-title/section-title";
import { ProjectCard } from '@components/project-card/project-card';
import { RepoI, ReposService } from '@services/repos.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: 'projects',
  imports: [
    SectionTitle,
    ProjectCard,
    AsyncPipe
],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly repos: ReposService= inject(ReposService);

  projects$: Observable<RepoI[]> = this.repos.fetch();
}
