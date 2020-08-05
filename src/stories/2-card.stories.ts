import {CardComponent} from "../../projects/bs-lib/src/lib/card/card.component";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {TmCardAction} from "../../projects/bs-lib/src/lib/card/config/tm-card-action";
import {RouterTestingModule} from "@angular/router/testing";

export default {
  title: 'Card',
  component: CardComponent,
};

let actions: TmCardAction[] = [
  {
    icon: 'fas fa-download',
    color: '#007bff',
    onClick: clickAction
  },
  {
    icon: 'fas fa-print',
    color: '#28a745',
    onClick: clickAction
  }
];

function clickAction() {
  window.alert("Action clicked!");
}

export const Basic = (): StoryFnAngularReturnType => ({
  moduleMetadata: {
    declarations: [CardComponent],
    imports: [RouterTestingModule]
  },
  props: {
    actions: actions
  },
  template: '<tm-card headerText="Header Text" headerSubText="Sub Text" [actions]="actions" footerText="Footer Text" footerIcon="fas fa-hand-paper">Lorem ipsum</tm-card>'
});
