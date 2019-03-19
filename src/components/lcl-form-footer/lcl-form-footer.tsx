import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-form-footer',
  styleUrl: 'lcl-form-footer.css',
  shadow: true,
})
export class LclFormFooter {
  render() {
    return (
      <div>
        <p>Hello LclFormFooter!</p>
      </div>
    );
  }
}
