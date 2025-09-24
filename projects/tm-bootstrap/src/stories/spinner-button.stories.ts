import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {SpinnerButtonComponent} from '../lib/button/spinner-button/spinner-button.component';
import {action} from 'storybook/actions';

const meta: Meta<SpinnerButtonComponent> = {
  title: 'Library/Buttons/SpinnerButton',
  component: SpinnerButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export default meta;

type Story = StoryObj<SpinnerButtonComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    spin: false,
    btnType: 'button',
    className: 'btn-primary',
    text: 'Click me',
    icon: 'bi bi-link',
    displayAsIcon: false,
    disabled: false,
    onClick: action('onClick'),
  },
};
