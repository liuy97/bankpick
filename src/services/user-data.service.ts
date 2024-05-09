import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  currentTabsIndex = new BehaviorSubject<number>(0);
}
