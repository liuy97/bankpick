import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
} from "@angular/core";

import { NavigationService } from "~/services/navigation.service";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs";
import { StatisticService } from "~/services/statistic.service";
import { StatisticEntry } from "../models/statistic-entry";
import { SharedModule } from "../shared.module";
import { StatisticEntriesComponent } from "../statistic-entries/statistic-entries.component";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule, StatisticEntriesComponent],
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  entries = new Array<StatisticEntry>();

  constructor(
    private navigationService: NavigationService,
    private activatedRoute: ActivatedRoute,
    private statisticService: StatisticService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.statisticService.entries$
      .pipe(
        tap((entries) => {
          this.entries = entries;
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {}

  sendMoney(): void {
    this.navigationService.navigate(["send-money"], {
      relativeTo: this.activatedRoute,
      animated: true,
      transition: {
        name: "slide",
        duration: 200,
        curve: "ease",
      },
    });
  }

  requestMoney(): void {
    this.navigationService.navigate(["request-money"], {
      relativeTo: this.activatedRoute,
      animated: true,
      transition: {
        name: "slide",
        duration: 200,
        curve: "ease",
      },
    });
  }

  search(): void {
    this.navigationService.navigate(["search"], {
      relativeTo: this.activatedRoute,
      animated: true,
      transition: {
        name: "slide",
        duration: 200,
        curve: "ease",
      },
    });
  }
}
