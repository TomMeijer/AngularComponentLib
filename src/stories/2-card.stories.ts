import {CardComponent} from "../../projects/bs-lib/src/lib/card/card.component";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {RouterTestingModule} from "@angular/router/testing";

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
  template: '<tm-card headerTitle="Header Title" headerSubtitle="Subtile" footerText="Footer Text" footerIcon="fas fa-hand-paper">Lorem ipsum</tm-card>'
});
