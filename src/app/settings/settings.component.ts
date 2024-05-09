import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavigationService } from "~/services/navigation.service";
import { SharedModule } from "../shared.module";
import { AuthService } from "~/services/auth.service";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "Settings",
  templateUrl: "./settings.component.html",
  styleUrl: "./settings.component.scss",
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private navigationService: NavigationService
  ) {
    //
  }

  ngOnInit(): void {
    //
  }

  navigate(path: string) {
    this.navigationService.navigate([path], {
      relativeTo: this.activatedRoute,
      animated: true,
      transition: {
        name: "slide",
        duration: 200,
        curve: "ease",
      },
    });
  }

  logout() {
    this.authService.setLoggedIn(false);
    this.navigationService
      .navigate(["/login"], { clearHistory: true })
      .then(() => console.log("Navigated to login"));
  }
}
