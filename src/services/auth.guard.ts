import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { NavigationService } from "./navigation.service";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { LocalSettingsService } from "./local-settings.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(
    private navigationService: NavigationService,
    private localSettingsService: LocalSettingsService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean {
    return of(this.authService.isLoggedIn()).pipe(
      map((loggedIn) => {
        if (!loggedIn) {
          if (
            this.localSettingsService.getBoolean(
              LocalSettingsService.OnBoarding,
              true
            )
          ) {
            this.navigationService
              .navigate(["/on-boarding"], { clearHistory: true })
              .then(() => console.log("Navigated to on-boarding"));
          } else {
            this.navigationService
              .navigate(["/login"], { clearHistory: true })
              .then(() => console.log("Navigated to login"));
          }
        }
        return loggedIn;
      })
    );
  }
}
