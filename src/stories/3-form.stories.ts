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

let model = {
  name: {
    first: 'Tom'
  },
  country: {
    id: 1,
    name: 'Netherlands'
  }
};

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
    type: 'ngselect',
    label: 'Country',
    name: 'country',
    required: true,
    prependIcon: 'fas fa-user',
    ngSelect: {
      bindLabel: 'name',
      optionTemplate: getCountryOptionHTML,
      labelTemplate: getCountryOptionHTML,
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
