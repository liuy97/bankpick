import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs",
    pathMatch: "full",
  },

  {
    path: "tabs",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("~/app/tabs/tabs.module").then((m) => m.TabsModule),
  },

  {
    path: "login",
    loadComponent: () =>
      import("~/app/login/login.component").then((m) => m.LoginComponent),
  },

  {
    path: "signup",
    loadComponent: () =>
      import("~/app/sign-up/sign-up.component").then((m) => m.SignUpComponent),
  },

  {
    path: "on-boarding",
    loadComponent: () =>
      import("~/app/on-boarding/on-boarding.component").then(
        (m) => m.OnBoardingComponent
      ),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
