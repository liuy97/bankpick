import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { CoreTypes } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { UserDataService } from "./user-data.service";
import { TabsId } from "../app/models/tabs.id.enum";
import AnimationCurve = CoreTypes.AnimationCurve;
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private tabOutlets: { [k: number]: string } = {
    [TabsId.Home]: "homeOutlet",
    [TabsId.Statistic]: "StatisticOutlet",
    [TabsId.MyCards]: "myCardsOutlet",
    [TabsId.Settings]: "settingsOutlet",
  };

  private currentTabOutlet = new BehaviorSubject<string>("homeOutlet");

  constructor(
    private routerExtensions: RouterExtensions,
    private userDataService: UserDataService
  ) {
    this.userDataService.currentTabsIndex
      .pipe(
        tap((index) => {
          this.currentTabOutlet.next(this.tabOutlets[index]);
        })
      )
      .subscribe();
  }

  canGoBack() {
    const backOptions = this.getBackOptions(this.routerExtensions);
    return this.routerExtensions.canGoBack(backOptions);
  }

  back(): boolean {
    const backOptions = this.getBackOptions(this.routerExtensions);
    if (this.routerExtensions.canGoBack(backOptions)) {
      this.routerExtensions.back(backOptions);
      return true;
    }
    return false;
  }

  navigateTabs(activatedRoute: ActivatedRoute) {
    this.navigate(
      [
        {
          outlets: {
            homeOutlet: ["home"],
            myCardsOutlet: ["myCards"],
            statisticOutlet: ["statistic"],
            settingsOutlet: ["settings"],
          },
        },
      ],
      { relativeTo: activatedRoute, clearHistory: true }
    );
  }

  navigate(commands: any[], extras: any = {}) {
    const clearHistory = extras.clearHistory || false;
    return this.routerExtensions.navigate(commands, {
      ...extras,
      transition: {
        ...extras.transition,
        name: clearHistory ? "fade" : "slide",
        curve: AnimationCurve.easeIn,
        duration: 150,
      },
    });
  }

  private getBackOptions(routerExtensions: RouterExtensions) {
    const useOutlets = routerExtensions.router.url.startsWith("/tabs");
    const backOptions: any = {};
    if (useOutlets) {
      backOptions.outlets = [this.currentTabOutlet.value];
    }
    return backOptions;
  }
}
