import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import { action } from 'storybook/actions';
import {TextareaComponent} from '../lib/input/textarea/textarea.component';

const meta: Meta<TextareaComponent> = {
  title: 'Library/Inputs/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  argTypes: {
    onInput: { action: 'onInput' },
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<TextareaComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    name: 'bio',
    label: 'Biography',
    required: false,
    placeholder: '',
    maxLength: 50,
    tooltipText: 'Write your life story',
    tooltipIcon: 'bi bi-question-circle',
    className: '',
    showRequiredStar: false,
    small: false,
    textareaRows: 5,
    disabled: false,
    readOnly: false,
    validationFn: () => null,
    onChange: action('onChange'),
    onInput: action('onInput'),
  },
};
