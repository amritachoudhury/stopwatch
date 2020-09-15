import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public second: number = 0;
  public hour: number = 0;
  public minute: number = 0;
  public flag: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public start(sec: number): void {
    this.flag = true;
    this.countSeconds(sec);
  }

  public countSeconds(sec: number): void {
    if (this.flag) {
      setTimeout(() => {
        this.second = ++sec;
        if (this.second === 10) {
          this.second = 0;
          this.minute++;
          if (this.minute === 3) {
            this.minute = 0;
            this.hour++;
          }
        }
        this.countSeconds(this.second);
      }, 1000);
    }
  }

  public pause(): void {
    this.flag = false;
  }
  

  // public stop(): void {
  //   this.flag = false;
  //   this.second = 0;
  //   this.minute = 0;
  //   this.hour = 0;
  // }
}
