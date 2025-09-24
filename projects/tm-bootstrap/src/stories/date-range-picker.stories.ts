import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {DateRangePickerComponent} from '../lib/input/date-range-picker/date-range-picker.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import {action} from 'storybook/actions';

const meta: Meta<DateRangePickerComponent> = {
  title: 'Library/Inputs/DateRangePicker',
  component: DateRangePickerComponent,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
    prependClick: { action: 'prependClick' },
    appendClick: { action: 'appendClick' },
  },
};

export default meta;

type Story = StoryObj<DateRangePickerComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule],
      providers: [provideAnimations()]
    }),
  ],
  args: {
    label: 'Choose a date range',
    name: 'dates',
    required: false,
    showRequiredStar: false,
    placeholder: '',
    className: '',
    tooltipText: 'Select a start and end date',
    tooltipIcon: 'bi bi-question-circle',
    prependText: '',
    prependIcon: 'bi bi-calendar-week',
    appendText: '',
    appendIcon: '',
    small: false,
    disabled: false,
    readOnly: false,
    minDate: new Date(),
    maxDate: new Date(Date.now() + 90 * 86400000),
    maxDays: 7,
    containerClass: 'theme-default',
    validationFn: () => null,
    onChange: action('onChange'),
    prependClick: action('prependClick'),
    appendClick: action('appendClick'),
  },
};
