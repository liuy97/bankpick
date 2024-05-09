import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { TranslateModule } from "@ngx-translate/core";
import { NavigationActionBarComponent } from "./navigation-action-bar/navigation-action-bar.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NavigationActionBarComponent,
    TranslateModule,
  ],
  exports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NavigationActionBarComponent,
    TranslateModule,
  ],
  providers: [],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
