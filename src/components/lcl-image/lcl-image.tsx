import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-image',
  styleUrl: 'lcl-image.css',
  shadow: true,
})
export class LclImage {
  render() {
    return (
      <div>
        <p>Hello LclImage!</p>
      </div>
    );
  }
}
