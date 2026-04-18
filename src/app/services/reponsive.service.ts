import { inject, Injectable, signal } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private readonly breakpointObserver: BreakpointObserver = inject(BreakpointObserver)

  private _isMobile = signal(false);
  
  constructor() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(
      result => {
        this._isMobile.set(result.matches);
      }
    )
  }

  get isMobile() { return this._isMobile.asReadonly(); }
}