import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";
import { ActivatedRoute } from "@angular/router";
import { tap } from "rxjs";
import { NavigationService } from "~/services/navigation.service";
import { StatisticService } from "~/services/statistic.service";
import { StatisticEntry } from "../models/statistic-entry";
import { StatisticEntriesComponent } from "../statistic-entries/statistic-entries.component";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule, StatisticEntriesComponent],
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
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
}
