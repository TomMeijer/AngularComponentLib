import {PaginationModule} from "ngx-bootstrap/pagination";
import {StoryFnAngularReturnType} from "@storybook/angular/dist/client/preview/types";
import {TableComponent} from "../../projects/tm-bootstrap/src/lib/table/table.component";

export default {
  title: 'Table',
  component: TableComponent,
};

function changePage(page: number) {
  window.alert('Page changed to: ' + page);
}

export const Basic = (): StoryFnAngularReturnType => ({
  component: TableComponent,
  moduleMetadata: {
    imports: [PaginationModule.forRoot()],
  },
  props: {
    striped: true,
    totalItems: 4
  },
});
