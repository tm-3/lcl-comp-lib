import { Component } from "@stencil/core";

@Component({
  tag: "lcl-menu",
  styleUrl: "lcl-menu.css",
  shadow: true
})
export class LclMenu {
  render() {
    return (
      <div>
        <p>Hello LclMenu!</p>
      </div>
    );
  }
}
