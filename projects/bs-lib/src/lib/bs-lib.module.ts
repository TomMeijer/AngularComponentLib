import { NgModule } from '@angular/core';
import { BsLibComponent } from './bs-lib.component';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [BsLibComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [BsLibComponent]
})
export class BsLibModule { }
