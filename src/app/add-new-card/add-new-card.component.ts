import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "../shared.module";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [SharedModule],
  selector: "add-new-card",
  templateUrl: "./add-new-card.component.html",
  styleUrls: ["./add-new-card.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewCardComponent {
  selectedLanguage: string;

  ngOnInit() {
    //
  }
}
