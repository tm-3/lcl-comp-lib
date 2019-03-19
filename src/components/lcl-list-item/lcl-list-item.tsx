import { Component } from '@stencil/core';

@Component({
  tag: 'lcl-list-item',
  styleUrl: 'lcl-list-item.css',
  shadow: true,
})
export class LclListItem {
  render() {
    return (
      <div>
        <p>Hello LclListItem!</p>
      </div>
    );
  }
}
