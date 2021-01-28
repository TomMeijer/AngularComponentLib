import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { CardComponent } from './card/card.component';
import {RouterModule} from "@angular/router";
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { LabelComponent } from './input/label/label.component';
import { InputPrependComponent } from './input/input-prepend/input-prepend.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import { InputComponent } from './input/input/input.component';
import { CheckboxComponent } from './input/checkbox/checkbox.component';
import { SelectComponent } from './input/select/select.component';
import { NgSelectComponent } from './input/ng-select/ng-select.component';
import { TextareaComponent } from './input/textarea/textarea.component';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    FormComponent,
    LabelComponent,
    InputPrependComponent,
    SkeletonLoaderComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    NgSelectComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    RouterModule,
    FormsModule,
    TooltipModule,
    NgSelectModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    TableComponent,
    CardComponent,
    FormComponent,
    SkeletonLoaderComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    NgSelectComponent,
    TextareaComponent
  ]
})
export class TmBootstrapModule { }
