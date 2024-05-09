import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";
import { StatisticEntry } from "../models/statistic-entry";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "statistic-entry",
  templateUrl: "./statistic-entry.component.html",
  styleUrls: ["./statistic-entry.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticEntryComponent {
  @Input() statisticEntry: StatisticEntry;
  ngOnInit() {
    //
  }
}
