import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-checkbox',
  styleUrl: 'lcl-checkbox.css',
  shadow: true,
})
export class LclCheckbox {
  render() {
    return (
      <div>
        <p>Hello LclCheckbox!</p>
      </div>
    );
  }
}
