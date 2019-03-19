import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-chip',
  styleUrl: 'lcl-chip.css',
  shadow: true,
})
export class LclChip {
  render() {
    return (
      <div>
        <p>Hello LclChip!</p>
      </div>
    );
  }
}
