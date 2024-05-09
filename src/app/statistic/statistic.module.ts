import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { StatisticRoutingModule } from "./statistic-routing.module";
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [SharedModule, StatisticRoutingModule],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StatisticModule {}
