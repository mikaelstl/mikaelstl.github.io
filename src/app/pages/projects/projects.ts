import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SectionTitle } from "@components/base/section-title/section-title";
import { ProjectCard } from '@components/project-card/project-card';
import { RepoI, ReposService } from '@services/repos.service';
import { forkJoin, Subject, takeUntil } from 'rxjs';

const REPOS: string[] = [
  'tasker_api',
  'tasker_app',
  'komik-web',
  'komik',
  'portals_api',
  'portals_msmail',
  'portals_msboxoffice',
]

@Component({
  selector: 'projects',
  imports: [
    SectionTitle,
    ProjectCard,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  private readonly repos: ReposService= inject(ReposService);

  projects: RepoI[] = [];

  ngOnInit(): void {
    const cached = this.repos.getCache();

    if (cached) {
      cached.subscribe(
        data => this.projects = data
      );
      return;
    } else {
      const reqs = REPOS.map(
        (repo) => this.repos.get(repo)
      );

      forkJoin(reqs)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (data) => {
            this.repos.setCache(data);
            this.projects = data;
          },
          error: (err) => {
            alert('ERROR to load repos');
            console.error('ERROR to load repos: ', err)
          }
        })
    }

    console.log(this.projects);
    
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete()
  }
}
