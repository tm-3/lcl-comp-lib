import { Component } from "@stencil/core";

@Component({
  tag: "lcl-tooltip",
  styleUrl: "lcl-tooltip.css",
  shadow: true
})
export class LclTooltip {
  render() {
    return (
      <div>
        <p>Hello LclTooltip!</p>
      </div>
    );
  }
}
