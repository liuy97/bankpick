import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from "@angular/core";
import { StatisticService } from "../../services/statistic.service";
import { StatisticEntry } from "../models/statistic-entry";
import { tap } from "rxjs";
import { SharedModule } from "../shared.module";
import { StatisticEntriesComponent } from "../statistic-entries/statistic-entries.component";
@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule, StatisticEntriesComponent],
  selector: "statistic",
  templateUrl: "./statistic.component.html",
  styleUrl: "./statistic.component.scss",
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticComponent implements OnInit {
  entries = new Array<StatisticEntry>();
  constructor(
    private statisticService: StatisticService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    //
  }

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
