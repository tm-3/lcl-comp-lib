import { Component } from "@stencil/core";

@Component({
  tag: "lcl-app",
  styleUrl: "lcl-app.css",
  shadow: true
})
export class LclApp {
  render() {
    return (
      <div>
        <p>Hello LclApp!</p>
      </div>
    );
  }
}
