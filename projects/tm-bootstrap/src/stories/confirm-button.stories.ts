import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {ConfirmButtonComponent} from '../lib/button/confirm-button/confirm-button.component';
import {action} from 'storybook/actions';

const meta: Meta<ConfirmButtonComponent> = {
  title: 'Library/Buttons/ConfirmButton',
  component: ConfirmButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onConfirm: { action: 'onConfirm' },
    onCancel: { action: 'onCancel' },
  },
};

export default meta;

type Story = StoryObj<ConfirmButtonComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    spin: false,
    className: 'btn-danger',
    text: 'Delete account',
    icon: 'bi bi-x-lg',
    displayAsIcon: false,
    leftDialog: false,
    confirmText: 'Are you sure?',
    subText: 'Your account will be permanently deleted',
    dialogWidth: '',
    requiredUserInput: '',
    onConfirm: action('onConfirm'),
    onCancel: action('onCancel'),
  },
};
