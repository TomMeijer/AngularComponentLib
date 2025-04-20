import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {CardComponent} from '../lib/card/card.component';

export default {
  title: 'Library/Card',
  component: CardComponent,
  tags: ['autodocs']
} as Meta<CardComponent>;

type Story = StoryObj<CardComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <tm-card [headerTitle]="headerTitle"
               [headerSubtitle]="headerSubtitle"
               [headerIcon]="headerIcon"
               [footerText]="footerText"
               [footerIcon]="footerIcon"
               [imgTopSrc]="imgTopSrc"
               [imgBottomSrc]="imgBottomSrc"
               [className]="className"
      >
        <div>Card contents.</div>
      </tm-card>
    `,
  }),
  args: {
    headerTitle: 'Card title',
    headerIcon: 'bi bi-star',
    headerSubtitle: 'Subtitle',
    footerText: 'Footer text',
    footerIcon: 'bi bi-info-circle',
    imgTopSrc: '',
    imgBottomSrc: '',
    className: ''
  },
};
