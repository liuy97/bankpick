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
  selector: "send-money",
  templateUrl: "./send-money.component.html",
  styleUrls: ["./send-money.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendMoneyComponent {
  ngOnInit() {
    //
  }
}
