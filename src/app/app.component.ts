import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public millisecond: number = 0;
  public second: number = 0;
  public hour: number = 0;
  public minute: number = 0;
  public flag: boolean = false;
  public isResetDisabled: boolean = true;
  public isStopDisabled: boolean = true;

  constructor() {}

  public ngOnInit(): void {}

  public start(ms: number): void {
    this.isStopDisabled = !this.isStopDisabled;
    this.isResetDisabled = false;
    this.countSeconds(ms);
  }

  public countSeconds(ms: number): void {
    if (!this.isStopDisabled) {
      setTimeout(() => {
        this.millisecond = ++ms;
        if (this.millisecond === 100) {
          this.millisecond = 0;
          this.second++;
          if (this.second === 60) {
            this.second = 0;
            this.minute++;
            if (this.minute === 60) {
              this.minute = 0;
              this.hour++;
            }
          }
        }
        this.countSeconds(this.millisecond);
      }, 10);
    }
  }

  public pause(): void {
    this.isStopDisabled = false;
  }

  public reset(): void {
    this.second = 0;
    this.minute = 0;
    this.hour = 0;
  }
}
