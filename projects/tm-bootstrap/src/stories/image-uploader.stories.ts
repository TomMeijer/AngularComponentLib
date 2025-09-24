import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {ImageUploaderComponent} from '../lib/image-uploader/image-uploader.component';
import {action} from 'storybook/actions';

const meta: Meta<ImageUploaderComponent> = {
  title: 'Library/ImageUploader',
  component: ImageUploaderComponent,
  tags: ['autodocs'],
  argTypes: {
    onClear: { action: 'onClear' },
  },
};

export default meta;

type Story = StoryObj<ImageUploaderComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    name: 'profilePic',
    width: '150px',
    height: '150px',
    loading: false,
    loaderAnimation: 'progress',
    defaultImageSrc: 'assets/default_profile.png',
    required: false,
    clearable: true,
    rounded: true,
    uploadIcon: 'bi bi-upload',
    clearIcon: 'bi bi-x-lg',
    onClear: action('onClear'),
  },
};
