import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { LocalSettingsService } from "../../services/local-settings.service";
import { SharedModule } from "../shared.module";
import { NavigationService } from "~/services/navigation.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProfileComponent {
  selectedLanguage: string;

  constructor(
    private localSettingsService: LocalSettingsService,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.selectedLanguage = this.localSettingsService.getString(
      LocalSettingsService.Language,
      "en"
    );
  }

  navigate() {
    this.navigationService.navigate(["edit-profile"], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
