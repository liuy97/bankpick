import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { LocalSettingsService } from "../../services/local-settings.service";
import { SharedModule } from "../shared.module";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent {
  constructor(private localSettingsService: LocalSettingsService) {}

  ngOnInit() {
    //
  }
}
