import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

// import { LclButton } from '../../components/lcl-button/lcl-button';

const buttonText = text('Label', 'BUTTON');
const iconName = text('Icon Name', 'magnet');

const stories = storiesOf('UI|Inputs/Buttons', module);
stories.addDecorator(withKnobs);
stories
  .add('LCL Button - Default', () => {
    return `<lcl-button icon-name=${iconName}>
      ${buttonText}
        </lcl-button>`;
  })
  .add('LCL Button - Outline', () => {
    // const el: LclButton = document.createElement('lcl-button');
    // el.render();

    return `<lcl-button></lcl-button>`;
  })
  .add('LCL Button - Round', () => {
    // const el: LclButton = document.createElement('lcl-button');
    // el.render();

    return `<lcl-button>${buttonText}</lcl-button>`;
  })
  .add('LCL Button - All Options', () => {
    return `<lcl-button>${buttonText}</lcl-button>`;
  });
