import React from 'react';

import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number} from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs);

stories
  .add('with text', withNotes('A very simple component.')(() => {
     return <Button onClick={firstArgAction('clicked')}>
       <i className="fa fa-user fa-lg "></i> {text('label', 'Hello Button')}
       </Button>
  }))
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

