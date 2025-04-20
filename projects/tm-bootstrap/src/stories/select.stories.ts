import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import { action } from '@storybook/addon-actions';
import {SelectComponent} from '../lib/input/select/select.component';

const meta: Meta<SelectComponent> = {
  title: 'Library/Inputs/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
    prependClick: { action: 'prependClick' },
    appendClick: { action: 'appendClick' },
  },
};

export default meta;

type Story = StoryObj<SelectComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    name: 'country',
    label: 'Country',
    required: false,
    tooltipText: 'Select a country',
    tooltipIcon: 'bi bi-question-circle',
    prependText: '',
    prependIcon: 'bi bi-flag',
    className: '',
    showRequiredStar: false,
    small: false,
    items: [{name: 'Netherlands', code: 'NL'}, {name: 'United States', code: 'US'}],
    bindLabel: 'name',
    bindValue: 'code',
    disabled: false,
    validationFn: () => null,
    onChange: action('onChange'),
    prependClick: action('prependClick'),
    appendClick: action('appendClick'),
  },
};
