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
  selector: "contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  ngOnInit() {}
}
