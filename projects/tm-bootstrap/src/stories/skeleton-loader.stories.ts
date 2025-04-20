import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {SkeletonLoaderComponent} from '../lib/skeleton-loader/skeleton-loader.component';

const meta: Meta<SkeletonLoaderComponent> = {
  title: 'Library/SkeletonLoader',
  component: SkeletonLoaderComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SkeletonLoaderComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  args: {
    appearance: 'line',
    animation: 'progress',
    count: 3,
    height: '20px',
    width: '100%',
    marginTop: '0',
    marginBottom: '8px',
    marginLeft: '0',
    marginRight: '0',
  },
};
