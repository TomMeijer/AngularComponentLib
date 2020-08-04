import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [TableComponent, CardComponent],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: []
})
export class BsLibModule { }
