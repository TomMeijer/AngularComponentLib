import { NgModule } from '@angular/core';
import { BsLibComponent } from './bs-lib.component';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";

@NgModule({
  declarations: [BsLibComponent, TableComponent],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [BsLibComponent]
})
export class BsLibModule { }
