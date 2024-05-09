import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalSettingsService } from "./local-settings.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInStore = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedInStore.asObservable();

  constructor(private localSettingsService: LocalSettingsService) {
    this.loggedInStore.next(
      this.localSettingsService.getBoolean(LocalSettingsService.LoggedIn, false)
    );
  }

  isLoggedIn() {
    return this.loggedInStore.value;
  }

  setLoggedIn(loggedIn: boolean) {
    this.localSettingsService.setBoolean(
      LocalSettingsService.LoggedIn,
      loggedIn
    );
    this.loggedInStore.next(loggedIn);
  }
}
