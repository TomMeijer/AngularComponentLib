import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import { action } from 'storybook/actions';
import {NgSelectComponent} from '../lib/input/ng-select/ng-select.component';

const meta: Meta<NgSelectComponent> = {
  title: 'Library/Inputs/NgSelect',
  component: NgSelectComponent,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
    prependClick: { action: 'prependClick' },
    appendClick: { action: 'appendClick' },
  },
};

export default meta;

type Story = StoryObj<NgSelectComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    label: 'Country',
    name: 'country',
    required: false,
    placeholder: '',
    tooltipText: 'Select a country',
    tooltipIcon: 'bi bi-question-circle',
    prependText: '',
    prependIcon: 'bi bi-flag',
    appendText: '',
    appendIcon: '',
    className: '',
    showRequiredStar: false,
    small: false,
    items: [{name: 'Netherlands', code: 'NL'}, {name: 'United States', code: 'US'}],
    bindLabel: 'name',
    bindValue: 'code',
    clearable: true,
    searchable: true,
    disabled: false,
    validationFn: () => null,
    onChange: action('onChange'),
    prependClick: action('prependClick'),
    appendClick: action('appendClick'),
  },
};
