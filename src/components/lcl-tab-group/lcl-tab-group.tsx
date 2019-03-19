import { Component } from "@stencil/core";

@Component({
  tag: "lcl-tab-group",
  styleUrl: "lcl-tab-group.css",
  shadow: true
})
export class LclTabGroup {
  render() {
    return (
      <div>
        <p>Hello LclTabGroup!</p>
      </div>
    );
  }
}
