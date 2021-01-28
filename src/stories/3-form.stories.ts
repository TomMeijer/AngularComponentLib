import {FormComponent} from "../../projects/tm-bootstrap/src/lib/form/form.component";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {TmInput} from "../../projects/tm-bootstrap/src/lib/form/config/tm-input";
import {NgForm} from "@angular/forms";
import {TmBootstrapModule} from "../../projects/tm-bootstrap/src/lib/tm-bootstrap.module";
import {TooltipModule} from "ngx-bootstrap/tooltip";

export default {
  title: 'Form',
  component: FormComponent,
};

let model = {};

let inputs: TmInput[] = [
  {
    type: 'text',
    label: 'First name',
    name: 'name.first',
    required: true,
    prependIcon: 'fas fa-user',
    group: '1'
  },
  {
    type: 'text',
    label: 'Last name',
    name: 'name.last',
    group: '1'
  },
  {
    type: 'number',
    label: 'Age',
    name: 'age',
    pattern: '^[1-9][0-9]*$',
    group: '2'
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country.id',
    required: true,
    select: {
      bindLabel: 'name',
      bindValue: 'id',
      items: [
        {name: 'Netherlands', id: 1, code: 'NL'},
        {name: 'United States', id: 2, code: 'US'}
      ]
    },
    tooltip: "Your country of birth",
    group: '2'
  },
  {
    type: 'checkbox',
    label: 'Awesome',
    name: 'awesome',
    tooltip: 'Check if you are awesome.'
  },
  {
    type: 'textarea',
    label: 'Hobbies',
    name: 'hobbies',
    textareaRows: 3
  }
];

function submitForm(form: NgForm) {
  window.alert(JSON.stringify(model, null, 4));
}

export const Basic = (): StoryFnAngularReturnType => ({
  component: FormComponent,
  moduleMetadata: {
    imports: [
      TmBootstrapModule,
      TooltipModule.forRoot()
    ]
  },
  props: {
    inputs: inputs,
    model: model,
    submitText: 'Submit',
    onSubmit: submitForm
  }
});
