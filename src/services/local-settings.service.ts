import { Injectable } from "@angular/core";
import { ApplicationSettings } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class LocalSettingsService {
  static LoggedIn = "LoggedIn";
  static OnBoarding = "OnBoarding";
  static Language = "Language";
  setString(key: string, value: string): void {
    ApplicationSettings.setString(key, value);
  }

  getString(key: string, defaultValue: string): string {
    return ApplicationSettings.getString(key, defaultValue);
  }

  setBoolean(key: string, value: boolean): void {
    ApplicationSettings.setBoolean(key, value);
  }

  getBoolean(key: string, defaultValue: boolean): boolean {
    return ApplicationSettings.getBoolean(key, defaultValue);
  }
}
