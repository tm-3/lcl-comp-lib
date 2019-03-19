import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-form-header',
  styleUrl: 'lcl-form-header.css',
  shadow: true,
})
export class LclFormHeader {
  render() {
    return (
      <div>
        <p>Hello LclFormHeader!</p>
      </div>
    );
  }
}
