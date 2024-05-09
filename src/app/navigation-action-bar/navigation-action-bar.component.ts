import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NO_ERRORS_SCHEMA,
  Output,
} from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
  moduleId: module.id,
  standalone: true,
  imports: [NativeScriptCommonModule],
  selector: "navigation-action-bar",
  templateUrl: "./navigation-action-bar.component.html",
  styleUrls: ["./navigation-action-bar.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationActionBarComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() showBack = true;
  @Output() iconEvent = new EventEmitter();

  constructor(private navigationService: NavigationService) {}

  onBack() {
    this.navigationService.back();
  }

  tapIcon() {
    this.iconEvent.emit();
  }
}
