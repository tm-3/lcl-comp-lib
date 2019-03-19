import { Component } from "@stencil/core";

@Component({
  tag: "lcl-panel",
  styleUrl: "lcl-panel.css",
  shadow: true
})
export class LclPanel {
  render() {
    return (
      <div>
        <p>Hello LclPanel!</p>
      </div>
    );
  }
}
