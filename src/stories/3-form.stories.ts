import {FormComponent} from "../../projects/bs-lib/src/lib/form/form.component";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {TmInput} from "../../projects/bs-lib/src/lib/form/config/tm-input";
import {NgForm} from "@angular/forms";
import {BsLibModule} from "../../projects/bs-lib/src/lib/bs-lib.module";

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
    required: true,
    prependIcon: 'fas fa-user',
    group: '1'
  },
  {
    type: 'text',
    label: 'Last name',
    name: 'lastName',
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
    type: 'ngselect',
    label: 'Country',
    name: 'country',
    required: true,
    prependIcon: 'fas fa-user',
    ngSelect: {
      searchable: true,
      bindValue: 'code',
      bindLabel: 'name',
      optionTemplate: getCountryOptionHTML,
      labelTemplate: getCountryOptionHTML,
      items: [
        {name: 'Netherlands', code: 'NL'},
        {name: 'United States', code: 'US'}
      ]
    },
    tooltip: "Your country of birth",
    group: '2'
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

function getCountryOptionHTML(country): string {
  if (country.code === 'NL') {
    return `<i class="fas fa-cheese mr-2"></i>${country.name}`;
  } else {
    return country.name;
  }
}

function submitForm(form: NgForm) {
  window.alert(JSON.stringify(model, null, 4));
}

export const Basic = (): StoryFnAngularReturnType => ({
  component: FormComponent,
  moduleMetadata: {
    imports: [BsLibModule]
  },
  props: {
    className: 'my-form',
    inputs: inputs,
    model: model,
    onSubmit: submitForm,
    submitBtnClass: 'btn-success'
  }
});
