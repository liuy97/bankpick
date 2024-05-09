import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { SwipeDirection } from "@nativescript/core";
import { LocalSettingsService } from "~/services/local-settings.service";
import { SharedModule } from "../shared.module";

@Component({
  standalone: true,
  moduleId: module.id,
  imports: [SharedModule],
  templateUrl: "./on-boarding.component.html",
  styleUrls: ["./on-boarding.component.scss"],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnBoardingComponent implements OnInit, OnDestroy {
  onboardingSteps = [
    {
      image: "~/app/assets/images/on-boarding/1.png",
      title: "on_boarding.header_1",
      text: "on_boarding.description_1",
    },
    {
      image: "~/app/assets/images/on-boarding/2.png",
      title: "on_boarding.header_2",
      text: "on_boarding.description_2",
    },
    {
      image: "~/app/assets/images/on-boarding/3.png",
      title: "on_boarding.header_3",
      text: "on_boarding.description_3",
    },
  ];
  current = 0;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private localSettingsService: LocalSettingsService,
    private navigationService: NavigationService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit() {
    this.localSettingsService.setBoolean(LocalSettingsService.OnBoarding, true);
  }

  changeCurrentStep(n = 0) {
    this.current = Math.min(
      this.onboardingSteps.length - 1,
      Math.max(this.current + n, 0)
    );
    this.changeDetectorRef.markForCheck();
  }

  onSwipe(event) {
    switch (event.direction) {
      case SwipeDirection.right:
        this.changeCurrentStep(-1);
        break;
      case SwipeDirection.left:
        this.changeCurrentStep(1);
        break;
    }
  }

  onNext() {
    if (this.current + 1 >= this.onboardingSteps.length) {
      this.navigationService.navigate(["/login"], { clearHistory: true });
      return;
    }
    this.changeCurrentStep(1);
  }
}
