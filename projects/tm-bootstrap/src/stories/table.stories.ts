import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {TmBootstrapModule} from '../lib/tm-bootstrap.module';
import {TableComponent} from '../lib/table/table.component';
import {action} from 'storybook/actions';

export default {
  title: 'Library/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    onPageChange: { action: 'onPageChange' },
  },
} as Meta<TableComponent>;

type Story = StoryObj<TableComponent>;

export const Example: Story = {
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TmBootstrapModule]
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <tm-table
        [data]="data"
        [rowTemplate]="rowTpl"
        [headerTemplate]="headerTpl"
        [loading]="loading"
        [pagination]="pagination"
        [striped]="striped"
        [bordered]="bordered"
        [hover]="hover"
        [small]="small"
        [responsive]="responsive"
        [itemsPerPage]="itemsPerPage"
        [maxPageLinks]="maxPageLinks"
        [pageBoundaryLinks]="pageBoundaryLinks"
        [totalItems]="data.length"
        (onPageChange)="onPageChange($event)"
      >
        <ng-template #headerTpl>
          <tr><th>Naam</th><th>Leeftijd</th></tr>
        </ng-template>
        <ng-template #rowTpl let-item>
          <tr><td>{{ item.naam }}</td><td>{{ item.leeftijd }}</td></tr>
        </ng-template>
      </tm-table>
    `,
  }),
  args: {
    loading: false,
    striped: true,
    bordered: false,
    small: false,
    hover: false,
    responsive: true,
    data: [
      { naam: 'Alice', leeftijd: 30 },
      { naam: 'Bob', leeftijd: 40 },
      { naam: 'Carol', leeftijd: 27 },
      { naam: 'Hank', leeftijd: 33 },
      { naam: 'Tom', leeftijd: 29 }
    ],
    pagination: true,
    itemsPerPage: 5,
    maxPageLinks: 5,
    pageBoundaryLinks: true,
    onPageChange: action('onPageChange')
  },
};
