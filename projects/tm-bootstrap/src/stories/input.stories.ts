import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {InputComponent} from '../lib/input/input/input.component';
import { action } from 'storybook/actions';

const meta: Meta<InputComponent> = {
  title: 'Library/Inputs/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    onInput: { action: 'onInput' },
    onChange: { action: 'onChange' },
    prependClick: { action: 'prependClick' },
    appendClick: { action: 'appendClick' },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    type: 'text',
    name: 'username',
    label: 'Username',
    required: false,
    placeholder: '',
    maxLength: 50,
    pattern: '',
    tooltipText: 'Fill in your username',
    tooltipIcon: 'bi bi-question-circle',
    prependText: '',
    prependIcon: 'bi bi-person',
    appendText: '',
    appendIcon: '',
    className: '',
    showRequiredStar: false,
    small: false,
    disabled: false,
    readOnly: false,
    validationFn: () => null,
    onChange: action('onChange'),
    onInput: action('onInput'),
    prependClick: action('prependClick'),
    appendClick: action('appendClick'),
  },
};
