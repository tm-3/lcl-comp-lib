import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-form',
  styleUrl: 'lcl-form.css',
  shadow: true,
})
export class LclForm {
  render() {
    return (
      <div>
        <p>Hello LclForm!</p>
      </div>
    );
  }
}
