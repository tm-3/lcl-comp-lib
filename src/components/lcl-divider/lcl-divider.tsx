import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-divider',
  styleUrl: 'lcl-divider.css',
  shadow: true,
})
export class LclDivider {
  render() {
    return (
      <div>
        <p>Hello LclDivider!</p>
      </div>
    );
  }
}
