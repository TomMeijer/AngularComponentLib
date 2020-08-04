import {CardComponent} from "../../projects/bs-lib/src/lib/card/card.component";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";

export default {
  title: 'Card',
  component: CardComponent,
};

export const Basic = (): StoryFnAngularReturnType => ({
  moduleMetadata: {
    declarations: [CardComponent]
  },
  template: '<tm-card headerText="Basic Card" headerIcon="fas fa-check">Lorem ipsum<div class="card-footer">Custom Footer</div></tm-card>',
});
