import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {SaveButtonComponent} from '../lib/button/save-button/save-button.component';
import {CommonModule} from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';

const meta: Meta<SaveButtonComponent> = {
  title: 'Library/Buttons/SaveButton',
  component: SaveButtonComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SaveButtonComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    submitting: false,
    changed: false,
  },
};
