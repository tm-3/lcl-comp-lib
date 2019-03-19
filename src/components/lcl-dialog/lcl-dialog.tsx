import { Component } from "@stencil/core";

@Component({
  tag: "lcl-dialog",
  styleUrl: "lcl-dialog.css",
  shadow: true
})
export class LclDialog {
  render() {
    return (
      <div>
        <p>Hello LclDialog!</p>
      </div>
    );
  }
}
