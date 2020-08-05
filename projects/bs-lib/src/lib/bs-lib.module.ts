import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { CardComponent } from './card/card.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TableComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule
  ],
  exports: [
    TableComponent,
    CardComponent
  ]
})
export class BsLibModule { }
