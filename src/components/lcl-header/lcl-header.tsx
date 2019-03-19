import { Component } from "@stencil/core";

@Component({
  tag: "lcl-header",
  styleUrl: "lcl-header.css",
  shadow: true
})
export class LclHeader {
  render() {
    return (
      <div>
        <p>Hello LclHeader!</p>
      </div>
    );
  }
}
