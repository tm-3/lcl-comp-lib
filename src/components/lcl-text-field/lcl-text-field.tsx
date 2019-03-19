import { Component } from "@stencil/core";

@Component({
  tag: "lcl-text-field",
  styleUrl: "lcl-text-field.css",
  shadow: true
})
export class LclTextField {
  render() {
    return (
      <div>
        <p>Hello LclTextField!</p>
      </div>
    );
  }
}
