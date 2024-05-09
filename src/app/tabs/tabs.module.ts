import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";
import { Routes } from "@angular/router";
import { NativeScriptMaterialBottomNavigationBarModule } from "@nativescript-community/ui-material-bottomnavigationbar/angular";
import { SharedModule } from "../shared.module";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./tabs.component").then((m) => m.TabsComponent),
    children: [
      {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/home/home.module").then((m) => m.HomeTabModule),
        outlet: "homeOutlet",
      },
      {
        path: "statistic",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/statistic/statistic.module").then(
            (m) => m.StatisticModule
          ),
        outlet: "statisticOutlet",
      },
      {
        path: "myCards",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/my-cards/my-cards.module").then((m) => m.MyCardsModule),
        outlet: "myCardsOutlet",
      },
      {
        path: "settings",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
        outlet: "settingsOutlet",
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    NativeScriptMaterialBottomNavigationBarModule,
    NativeScriptRouterModule.forChild(routes),
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsModule {}
