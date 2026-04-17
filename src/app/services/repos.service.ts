import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

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
  
  private readonly baseUrl = 'https://api.github.com/repos/mikaelstl'

  private readonly CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

  public readonly CACHE_KEY = 'github_repos_cache';

  public get(repo: string): Observable<RepoI> {
    return this.http.get<RepoI>(`${this.baseUrl}/${repo}`);
  }

  getCache(): Observable<RepoI[]> | null {
    const raw = localStorage.getItem(this.CACHE_KEY);

    if (!raw) return null;

    const { data, timestamp }: CacheI = JSON.parse(raw);

    const expired = Date.now() - timestamp > this.CACHE_EXPIRATION;

    if (expired) {
      localStorage.removeItem(this.CACHE_KEY);
      return null;
    }
    
    return of(data);
  }

  setCache(data: RepoI[]) {
    const cache: CacheI = {
      data,
      timestamp: Date.now()
    }

    localStorage.setItem(this.CACHE_KEY, JSON.stringify(cache));
  }
}