import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  DestroyRef,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, debounceTime, distinctUntilChanged, tap } from "rxjs";
import { NavigationService } from "~/services/navigation.service";
import { StatisticService } from "~/services/statistic.service";
import { StatisticEntry } from "../models/statistic-entry";
import { StatisticEntriesComponent } from "../statistic-entries/statistic-entries.component";
import { PropertyChangeData } from "@nativescript/core";

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
  displayedEntries = new Array<StatisticEntry>();
  private entries = new Array<StatisticEntry>();
  private searchSubject = new BehaviorSubject("");
  private destroyRef = inject(DestroyRef);

  constructor(
    private navigationService: NavigationService,
    private activatedRoute: ActivatedRoute,
    private statisticService: StatisticService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => {
          if (value) {
            this.displayedEntries = this.entries.filter(
              (entry) => entry.brand.indexOf(value) > -1
            );
          } else {
            this.displayedEntries = this.entries.slice();
          }
          this.changeDetectorRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();

    this.statisticService.entries$
      .pipe(
        tap((entries) => {
          this.entries = entries;
          this.changeDetectorRef.markForCheck();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  search(args: PropertyChangeData) {
    this.searchSubject.next(args.value);
  }
}
