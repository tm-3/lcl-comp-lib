import { Component } from "@stencil/core";

@Component({
  tag: "lcl-card",
  styleUrl: "lcl-card.css",
  shadow: true
})
export class LclCard {
  render() {
    return (
      <div>
        <p>Hello LclCard!</p>
      </div>
    );
  }
}
