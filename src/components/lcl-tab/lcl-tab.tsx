import { Component } from "@stencil/core";

@Component({
  tag: "lcl-tab",
  styleUrl: "lcl-tab.css",
  shadow: true
})
export class LclTab {
  render() {
    return (
      <div>
        <p>Hello LclTab!</p>
      </div>
    );
  }
}
