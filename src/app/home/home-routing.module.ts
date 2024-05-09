import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./home.component").then((m) => m.HomeComponent),
  },
  {
    path: "send-money",
    loadComponent: () =>
      import("../send-money/send-money.component").then(
        (m) => m.SendMoneyComponent
      ),
  },
  {
    path: "request-money",
    loadComponent: () =>
      import("../request-money/request-money.component").then(
        (m) => m.RequestMoneyComponent
      ),
  },
  {
    path: "search",
    loadComponent: () =>
      import("../search/search.component").then((m) => m.SearchComponent),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
