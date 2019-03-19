import { Component } from "@stencil/core";

@Component({
  tag: "lcl-label",
  styleUrl: "lcl-label.css",
  shadow: true
})
export class LclLabel {
  render() {
    return (
      <div>
        <p>Hello LclLabel!</p>
      </div>
    );
  }
}
