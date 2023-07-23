import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {CardComponent} from './card/card.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LabelComponent} from './input/label/label.component';
import {InputGroupTextComponent} from './input/input-group-text/input-group-text.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {SkeletonLoaderComponent} from './skeleton-loader/skeleton-loader.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {InputComponent} from './input/input/input.component';
import {CheckboxComponent} from './input/checkbox/checkbox.component';
import {SelectComponent} from './input/select/select.component';
import {NgSelectComponent} from './input/ng-select/ng-select.component';
import {TextareaComponent} from './input/textarea/textarea.component';
import {TableComponent} from './table/table.component';
import {DateRangePickerComponent} from './input/date-range-picker/date-range-picker.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';
import {SpinnerButtonComponent} from './button/spinner-button/spinner-button.component';

@NgModule({
  declarations: [
    CardComponent,
    LabelComponent,
    InputGroupTextComponent,
    SkeletonLoaderComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    NgSelectComponent,
    TextareaComponent,
    TableComponent,
    DateRangePickerComponent,
    ImageUploaderComponent,
    SpinnerButtonComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    RouterModule,
    FormsModule,
    TooltipModule,
    NgSelectModule,
    NgxSkeletonLoaderModule,
    BsDatepickerModule
  ],
  exports: [
    CardComponent,
    SkeletonLoaderComponent,
    InputComponent,
    CheckboxComponent,
    SelectComponent,
    NgSelectComponent,
    TextareaComponent,
    TableComponent,
    DateRangePickerComponent,
    ImageUploaderComponent,
    SpinnerButtonComponent
  ]
})
export class TmBootstrapModule { }
