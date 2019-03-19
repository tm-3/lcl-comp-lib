import { Component } from "@stencil/core";

@Component({
  tag: "lcl-list",
  styleUrl: "lcl-list.css",
  shadow: true
})
export class LclList {
  render() {
    return (
      <div>
        <p>Hello LclList!</p>
      </div>
    );
  }
}
