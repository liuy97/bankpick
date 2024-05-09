import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import * as en from "./assets/i18n/en.json";
import * as zh from "./assets/i18n/zh.json";
import { LocalSettingsService } from "~/services/local-settings.service";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  constructor(
    private localSettingsService: LocalSettingsService,
    private translateService: TranslateService
  ) {
    this.translateService.setTranslation("en", en);
    this.translateService.setTranslation("zh", zh);
    const language = this.localSettingsService.getString(
      LocalSettingsService.Language,
      "en"
    );
    this.translateService.use(language);
  }
  ngOnInit() {}
}
