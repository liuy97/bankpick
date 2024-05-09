import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";
import { StatisticEntryComponent } from "../statistic-entry/statistic-entry.component";
import { StatisticEntry } from "../models/statistic-entry";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule, StatisticEntryComponent],
  selector: "statistic-entries",
  templateUrl: "./statistic-entries.component.html",
  styleUrls: ["./statistic-entries.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticEntriesComponent {
  @Input() statisticEntries: Array<StatisticEntry>;

  ngOnInit() {
    //
  }
}
