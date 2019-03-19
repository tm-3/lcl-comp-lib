import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-control-group',
  styleUrl: 'lcl-control-group.css',
  shadow: true,
})
export class LclControlGroup {
  render() {
    return (
      <div>
        <p>Hello LclControlGroup!</p>
      </div>
    );
  }
}
