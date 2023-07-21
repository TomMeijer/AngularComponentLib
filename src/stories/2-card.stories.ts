import {CardComponent} from '../../projects/tm-bootstrap/src/lib/card/card.component';
import {StoryFnAngularReturnType} from '@storybook/angular/dist/client/types';

export default {
  title: 'Card',
  component: CardComponent,
};

export const Basic = (): StoryFnAngularReturnType => ({
  moduleMetadata: {
    declarations: [CardComponent]
  },
  props: {
  },
  template: '<tm-card headerTitle="Header Title" headerSubtitle="Subtitle" footerText="Footer Text" footerIcon="fas fa-hand-paper">Lorem ipsum</tm-card>'
});
