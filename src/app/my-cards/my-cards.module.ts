import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { MyCardsRoutingModule } from "./my-cards-routing.module";
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [SharedModule, MyCardsRoutingModule],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MyCardsModule {}
