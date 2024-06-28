import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from "@angular/router";
import { of } from "rxjs";
import { NavigationService } from "./navigation.service";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { LocalSettingsService } from "./local-settings.service";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const navigationService = inject(NavigationService);
  const localSettingsService = inject(LocalSettingsService);
  const authService = inject(AuthService);
  return of(authService.isLoggedIn()).pipe(
    map((loggedIn) => {
      if (!loggedIn) {
        if (
          localSettingsService.getBoolean(LocalSettingsService.OnBoarding, true)
        ) {
          navigationService
            .navigate(["/on-boarding"], { clearHistory: true })
            .then(() => console.log("Navigated to on-boarding"));
        } else {
          navigationService
            .navigate(["/login"], { clearHistory: true })
            .then(() => console.log("Navigated to login"));
        }
      }
      return loggedIn;
    })
  );
};
