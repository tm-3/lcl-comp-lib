import { Component } from "@stencil/core";

@Component({
  tag: "lcl-text-area",
  styleUrl: "lcl-text-area.css",
  shadow: true
})
export class LclTextArea {
  render() {
    return (
      <div>
        <p>Hello LclTextArea!</p>
      </div>
    );
  }
}
