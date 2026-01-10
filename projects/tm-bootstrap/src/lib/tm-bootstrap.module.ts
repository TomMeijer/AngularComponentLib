import {NgModule} from '@angular/core';
import {CardComponent} from './card/card.component';
import {LabelComponent} from './input/label/label.component';
import {InputGroupTextComponent} from './input/input-group-text/input-group-text.component';
import {SkeletonLoaderComponent} from './skeleton-loader/skeleton-loader.component';
import {InputComponent} from './input/input/input.component';
import {CheckboxComponent} from './input/checkbox/checkbox.component';
import {SelectComponent} from './input/select/select.component';
import {NgSelectComponent} from './input/ng-select/ng-select.component';
import {TextareaComponent} from './input/textarea/textarea.component';
import {TableComponent} from './table/table.component';
import {DateRangePickerComponent} from './input/date-range-picker/date-range-picker.component';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';
import {SpinnerButtonComponent} from './button/spinner-button/spinner-button.component';
import {SaveButtonComponent} from './button/save-button/save-button.component';
import {AlertOutputComponent} from './alert/alert-output/alert-output.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ConfirmButtonComponent} from './button/confirm-button/confirm-button.component';

@NgModule({
  imports: [
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
    SpinnerButtonComponent,
    SaveButtonComponent,
    AlertOutputComponent,
    ConfirmDialogComponent,
    ConfirmButtonComponent
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
    SpinnerButtonComponent,
    SaveButtonComponent,
    AlertOutputComponent,
    ConfirmDialogComponent,
    ConfirmButtonComponent
  ]
})
export class TmBootstrapModule { }
