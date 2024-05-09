import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared.module";
import { StatisticEntriesComponent } from "../statistic-entries/statistic-entries.component";

@NgModule({
  imports: [HomeRoutingModule, SharedModule, StatisticEntriesComponent],
  declarations: [],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeTabModule {}
