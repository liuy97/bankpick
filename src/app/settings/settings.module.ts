import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [SharedModule, SettingsRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
