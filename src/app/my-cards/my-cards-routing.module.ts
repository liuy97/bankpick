import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./my-cards.component").then((m) => m.MyCardsComponent),
  },
  {
    path: "add-new-card",
    loadComponent: () =>
      import("../add-new-card/add-new-card.component").then(
        (m) => m.AddNewCardComponent
      ),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class MyCardsRoutingModule {}
