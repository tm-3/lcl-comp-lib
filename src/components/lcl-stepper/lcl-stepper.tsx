import { Component } from "@stencil/core";

@Component({
  tag: "lcl-stepper",
  styleUrl: "lcl-stepper.css",
  shadow: true
})
export class LclStepper {
  render() {
    return (
      <div>
        <p>Hello LclStepper!</p>
      </div>
    );
  }
}
