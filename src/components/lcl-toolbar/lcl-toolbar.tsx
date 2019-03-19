import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-toolbar',
  styleUrl: 'lcl-toolbar.css',
  shadow: true,
})
export class LclToolbar {
  render() {
    return (
      <div>
        <p>Hello LclToolbar!</p>
      </div>
    );
  }
}
