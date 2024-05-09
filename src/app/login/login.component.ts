import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { AuthService } from "~/services/auth.service";
import { SharedModule } from "../shared.module";

@Component({
  standalone: true,
  moduleId: module.id,
  imports: [SharedModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit() {}

  login() {
    this.authService.setLoggedIn(true);
    this.navigationService.navigate(["/tabs"], { clearHistory: true });
  }

  signup() {
    this.navigationService.navigate(["/signup"]);
  }
}
