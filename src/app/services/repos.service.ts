import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, of, tap } from "rxjs";

/* 
  {
    "id": 992220724,
    "node_id": "R_kgDOOyQWNA",
    "name": "tasker_api",
    "html_url": "https://github.com/mikaelstl/tasker_api",
    "description": null,
    "url": "https://api.github.com/repos/mikaelstl/tasker_api",
    "forks_url": "https://api.github.com/repos/mikaelstl/tasker_api/forks",
    "keys_url": "https://api.github.com/repos/mikaelstl/tasker_api/keys{/key_id}",
    "branches_url": "https://api.github.com/repos/mikaelstl/tasker_api/branches{/branch}",
    "updated_at": "2025-05-28T20:07:40Z",
    "language": "TypeScript",
  }
*/

interface CacheI {
  data: RepoI[];
  timestamp: number;
}

export interface RepoI {
  id: number,
  node_id: string,
  name: string,
  html_url: string,
  description: string,
  url: string,
  branches?: number,
  updated_at: Date,
  language: string,
}

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  private readonly http: HttpClient = inject(HttpClient);

  private readonly baseUrl = 'https://api.github.com/users/mikaelstl/repos'

  private readonly CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

  public readonly CACHE_KEY = 'github_repos_cache';

  private readonly REPOS: string[] = [
    'tasker_api',
    'tasker_app',
    'komik-web',
    'komik',
    'portals_api',
    'portals_msmail',
    'portals_msboxoffice',
  ]

  public fetch() {
    const cache = this.fetchFromCache();

    if (!this.isEmpty(cache)) {
      return this.toObservable(cache);
    }

    return this.fetchFromAPI().pipe(
      map( data => 
        data.filter(repo => this.REPOS.includes(repo.name))
      ),
      tap( data => this.setCache(data) )
    )
  }

  private fetchFromAPI(): Observable<RepoI[]> {
    console.log('fetching repos from api');

    return this.http.get<RepoI[]>(this.baseUrl);
  }

  private fetchFromCache(): RepoI[] {
    console.log('fetching repos from cache');

    const raw = localStorage.getItem(this.CACHE_KEY);

    if (!raw) return [];

    const { data, timestamp }: CacheI = JSON.parse(raw);

    const expired = Date.now() - timestamp > this.CACHE_EXPIRATION;

    if (expired) {
      localStorage.removeItem(this.CACHE_KEY);
      return [];
    }

    return data;
  }

  private toObservable(data: RepoI[]): Observable<RepoI[]> {
    return of(data);
  }

  private setCache(data: RepoI[]) {
    const cache: CacheI = {
      data,
      timestamp: Date.now()
    }

    localStorage.setItem(this.CACHE_KEY, JSON.stringify(cache));
  }

  private isEmpty(data: RepoI[]): boolean {
    return !data || data?.length === 0;
  }
}