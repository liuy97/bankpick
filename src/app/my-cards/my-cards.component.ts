import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from "@angular/core";
import { tap } from "rxjs";
import { StatisticService } from "~/services/statistic.service";
import { StatisticEntry } from "../models/statistic-entry";
import { SharedModule } from "../shared.module";
import { StatisticEntryComponent } from "../statistic-entry/statistic-entry.component";
import { NavigationService } from "~/services/navigation.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule, StatisticEntryComponent],
  selector: "my-cards",
  templateUrl: "./my-cards.component.html",
  styleUrl: "./my-cards.component.scss",
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCardsComponent implements OnInit {
  entries = new Array<StatisticEntry>();
  constructor(
    private statisticService: StatisticService,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    //
  }

  ngOnInit(): void {
    this.statisticService.entries$
      .pipe(
        tap((entries) => {
          this.entries = entries.slice(0, 3);
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }

  addNewCard() {
    this.navigationService.navigate(["add-new-card"], {
      relativeTo: this.activatedRoute,
    });
  }
}
