import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";
import { TranslateService } from "@ngx-translate/core";
import { tap } from "rxjs";
import { LocalSettingsService } from "../../services/local-settings.service";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {
  selectedLanguage: string;

  constructor(
    private localSettingsService: LocalSettingsService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.localSettingsService.getString(
      LocalSettingsService.Language,
      "en"
    );
  }

  updateLanguage(code: "zh" | "en") {
    if (this.selectedLanguage === code) {
      return;
    }
    this.translateService
      .use(code)
      .pipe(
        tap(() => {
          this.selectedLanguage = code;
          this.localSettingsService.setString(
            LocalSettingsService.Language,
            code
          );
        })
      )
      .subscribe();
  }
}
