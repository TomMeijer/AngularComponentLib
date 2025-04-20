import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {ImageUploaderComponent} from '../lib/image-uploader/image-uploader.component';
import {CheckboxComponent} from '../lib/input/checkbox/checkbox.component';
import {action} from '@storybook/addon-actions';

const meta: Meta<CheckboxComponent> = {
  title: 'Library/Inputs/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    name: 'agree',
    label: 'Agree with terms & conditions',
    required: false,
    tooltipText: 'More information',
    className: '',
    showRequiredStar: false,
    tooltipIcon: 'bi bi-question-circle',
    disabled: false,
    validationFn: () => null,
    onChange: action('onChange')
  },
};
