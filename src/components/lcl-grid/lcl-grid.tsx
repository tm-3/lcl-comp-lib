import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-grid',
  styleUrl: 'lcl-grid.css',
  shadow: true,
})
export class LclGrid {
  render() {
    return (
      <div>
        <p>Hello LclGrid!</p>
      </div>
    );
  }
}
