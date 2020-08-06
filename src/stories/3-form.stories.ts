import {FormComponent} from "../../projects/bs-lib/src/lib/form/form.component";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {TmInput} from "../../projects/bs-lib/src/lib/form/config/tm-input";
import {NgForm} from "@angular/forms";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

export default {
  title: 'Form',
  component: FormComponent,
};

let model = {};

let inputs: TmInput[] = [
  {
    type: 'text',
    label: 'First name',
    name: 'firstName',
    required: true
  },
  {
    type: 'text',
    label: 'Last name',
    name: 'lastName',
    maxLength: 25
  },
  {
    type: 'number',
    label: 'Age',
    name: 'age',
    pattern: '^[1-9][0-9]*$'
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    selectOptions: [
      {text: 'Netherlands', value: 'NL'},
      {text: 'United States', value: 'US'}
    ],
    tooltip: "Your country of birth"
  },
  {
    type: 'checkbox',
    label: 'R U Awesome?',
    name: 'awesome'
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
    imports: [NgbTooltipModule]
  },
  props: {
    className: 'my-form',
    inputs: inputs,
    model: model,
    onSubmit: submitForm,
    submitBtnClass: 'btn-success'
  }
});
