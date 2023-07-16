import {Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'tm-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageUploaderComponent),
    multi: true
  }]
})
export class ImageUploaderComponent implements ControlValueAccessor {

  @ViewChild('imageInput')
  public imageInputElement: ElementRef;

  @Input()
  public name: string;
  @Input()
  public width = '170px';
  @Input()
  public height = '170px';
  @Input()
  public loading: boolean;
  @Input()
  public loaderAnimation: 'progress' | 'progress-dark' | 'pulse' | 'false' = 'progress';
  @Input()
  public defaultImageSrc: string;
  @Input()
  public required: boolean;
  @Input()
  public clearable: boolean;
  @Input()
  public rounded: boolean;
  @Input()
  public uploadIcon = 'fas fa-pencil-alt';
  @Input()
  public clearIcon = 'fas fa-trash-alt';

  @Output()
  public onClear: EventEmitter<MouseEvent> = new EventEmitter();

  public imageSrc: string;

  public _value: File;
  private onChangeFn = (value) => {};

  get value(): File {
    return this._value;
  }

  set value(value: File) {
    this._value = value;
    this.updateImageSrc();
    this.onChangeFn(value);
  }

  private updateImageSrc(): void {
    if (this._value) {
      const reader = new FileReader();
      reader.readAsDataURL(this._value);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    } else {
      this.imageSrc = this.defaultImageSrc;
    }
  }

  public clearImage(event: MouseEvent): void {
    this.value = null;
    this.imageInputElement.nativeElement.value = '';
    this.onClear.emit(event);
  }

  writeValue(value: File): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
  }
}
