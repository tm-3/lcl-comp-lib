import { storiesOf, forceReRender } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

// import { LclButton } from '../../components/lcl-button/lcl-button';

const bt = text('Label', 'BUTTON 1');
const iconName = text('Icon Name', 'magnet');

const stories = storiesOf('UI|Inputs/Buttons', module);
stories.addDecorator(withKnobs);
stories
  .add('LCL Button - Default', () => {
    forceReRender();
    return `<lcl-button icon-name=${iconName}>
      ${bt}
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

    return `<lcl-button>${bt}</lcl-button>`;
  })
  .add('LCL Button - All Options', () => {
    return `<lcl-button>${bt}</lcl-button>`;
  });
