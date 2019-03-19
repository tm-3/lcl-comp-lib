import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-form-section',
  styleUrl: 'lcl-form-section.css',
  shadow: true,
})
export class LclFormSection {
  render() {
    return (
      <div>
        <p>Hello LclFormSection!</p>
      </div>
    );
  }
}
