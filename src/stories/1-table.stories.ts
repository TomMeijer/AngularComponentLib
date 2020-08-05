import {TableComponent} from "../../projects/bs-lib/src/lib/table/table.component";
import {formatDate} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {TmColumn} from "../../projects/bs-lib/src/lib/table/config/tm-column";
import {TmPaginationConfig} from "../../projects/bs-lib/src/lib/table/config/tm-pagination-config";

export default {
  title: 'Table',
  component: TableComponent,
};

let columns: TmColumn[] = [
  {name: 'Username', data: 'username'},
  {name: 'Date registered', data: (obj) => formatDate(obj.registerDate, 'dd-MM-yyyy', 'en-US')},
  {name: 'Role', data: 'role.name'},
  {name: 'Status', data: renderStatus},
  {data: (obj, td) => td.innerHTML = `<a href="#"><i class="fas fa-pencil-alt"></i></a>`}
];

let pagination: TmPaginationConfig = {
  itemsPerPage: 2,
  maxPageLinks: 5,
  onPageChange: page => window.alert('Page changed to: ' + page)
};

function renderStatus(obj: any, td: HTMLElement): string {
  if (obj.status === 'Busy') {
    td.parentElement.classList.add('text-danger');
  }
  return obj.status;
}

let tableData = [
  {
    username: 'Tom',
    registerDate: '2020-06-10',
    role: {
      name: 'Boss man'
    },
    status: 'Awesome',
    id: 1
  },
  {
    username: 'Spiderman',
    registerDate: '1970-06-10',
    role: {
      name: 'Superhero'
    },
    status: 'Busy',
    id: 2
  },
  {
    username: 'Ted Bundy',
    registerDate: '1960-01-08',
    role: {
      name: 'Serial Killer'
    },
    status: 'Dead',
    id: 3
  },
  {
    username: 'Aria Stark',
    registerDate: '2005-04-02',
    role: {
      name: 'Warrior'
    },
    status: 'Uknown',
    id: 4
  }
];

export const Basic = (): StoryFnAngularReturnType => ({
  component: TableComponent,
  moduleMetadata: {
    imports: [PaginationModule.forRoot()],
  },
  props: {
    id: 'table1',
    striped: true,
    columns: columns,
    pagination: pagination,
    data: tableData,
    totalItems: 4
  },
});
