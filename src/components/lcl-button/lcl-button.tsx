import { Component, Prop } from "@stencil/core";
// import { ControlBase } from '../common/ControlBase';

/**
 * @slot - Default slot where content is placed.
 * @slot icon-left - Name of the icon to be placed left of the default slot
 */
@Component({
  tag: "lcl-button",
  styleUrls: ["lcl-button.css"],
  shadow: true
})
export class LclButton {
  /**
   * Icon to display on the button
   */
  @Prop() iconName?: string;

  render() {
    return (
      <div class="lcl-button">
        {this.iconName ? <ion-icon size="large" name={this.iconName} /> : null}
        <slot />
        <slot name="icon-right" />
      </div>
    );
  }
}
