import {SkeletonLoaderComponent} from '../../projects/tm-bootstrap/src/lib/skeleton-loader/skeleton-loader.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {StoryFnAngularReturnType} from '@storybook/angular/dist/client/types';

export default {
  title: 'Skeleton Loader',
  component: SkeletonLoaderComponent,
};

export const Line = (): StoryFnAngularReturnType => ({
  component: SkeletonLoaderComponent,
  moduleMetadata: {
    imports: [NgxSkeletonLoaderModule.forRoot()]
  },
  props: {
  }
});

export const Circle = (): StoryFnAngularReturnType => ({
  component: SkeletonLoaderComponent,
  moduleMetadata: {
    imports: [NgxSkeletonLoaderModule.forRoot()]
  },
  props: {
    appearance: 'circle'
  }
});
