import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../settings/settings.component").then((m) => m.SettingsComponent),
  },
  {
    path: "language",
    loadComponent: () =>
      import("../language/language.component").then((m) => m.LanguageComponent),
  },
  {
    path: "change-password",
    loadComponent: () =>
      import("../change-password/change-password.component").then(
        (m) => m.ChangePasswordComponent
      ),
  },
  {
    path: "contact-us",
    loadComponent: () =>
      import("../contact-us/contact-us.component").then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: "my-profile",
    loadComponent: () =>
      import("../my-profile/my-profile.component").then(
        (m) => m.MyProfileComponent
      ),
  },
  {
    path: "edit-profile",
    loadComponent: () =>
      import("../edit-profile/edit-profile.component").then(
        (m) => m.EditProfileComponent
      ),
  },
  {
    path: "privacy-policy",
    loadComponent: () =>
      import("../privacy-policy/privacy-policy.component").then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SettingsRoutingModule {}
