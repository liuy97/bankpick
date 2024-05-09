import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, map } from "rxjs";
import { UserDataService } from "../../services/user-data.service";
import { NavigationService } from "../../services/navigation.service";
import { TabsId } from "../models/tabs.id.enum";
import { TabSelectedEventData } from "@nativescript-community/ui-material-bottomnavigationbar";
import { SharedModule } from "../shared.module";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnDestroy {
  tabId = TabsId;
  private destroyed = new Subject<void>();
  isHidden$ = (index: number) =>
    this.userDataService.currentTabsIndex.pipe(
      map((selected) => selected !== index)
    );

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private userDataService: UserDataService
  ) {}

  ngOnDestroy(): void {
    this.destroyed.next(void 0);
    this.destroyed.complete();
  }

  ngOnInit() {
    this.navigationService.navigateTabs(this.activatedRoute);
  }

  onBottomNavigationTabSelected(args: TabSelectedEventData) {
    const newTab = args.newIndex;
    if (this.userDataService.currentTabsIndex.value !== newTab) {
      this.userDataService.currentTabsIndex.next(newTab);
    }
  }
}
