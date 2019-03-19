import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-nav-drawer',
  styleUrl: 'lcl-nav-drawer.css',
  shadow: true,
})
export class LclNavDrawer {
  render() {
    return (
      <div>
        <p>Hello LclNavDrawer!</p>
      </div>
    );
  }
}
