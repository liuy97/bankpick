import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";
import { NavigationService } from "~/services/navigation.service";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProfileComponent {
  constructor(private navigationService: NavigationService) {}

  ngOnInit() {}
}
