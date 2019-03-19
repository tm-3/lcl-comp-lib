import { Component } from "@stencil/core";

@Component({
  tag: "lcl-footer",
  styleUrl: "lcl-footer.css",
  shadow: true
})
export class LclFooter {
  render() {
    return (
      <div>
        <p>Hello LclFooter!</p>
      </div>
    );
  }
}
