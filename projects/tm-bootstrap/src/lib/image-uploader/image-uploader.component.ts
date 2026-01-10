import {Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgStyle} from '@angular/common';
import {SkeletonLoaderComponent} from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'tm-image-uploader',
  standalone: true,
  imports: [
    NgStyle,
    SkeletonLoaderComponent
  ],
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageUploaderComponent),
    multi: true
  }]
})
export class ImageUploaderComponent implements ControlValueAccessor, OnInit {
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
  public uploadIcon = 'bi bi-pencil';
  @Input()
  public clearIcon = 'bi bi-trash';

  @Output()
  public onClear: EventEmitter<MouseEvent> = new EventEmitter();

  public imageSrc: string;

  public _value: File;
  private onChangeFn = (value: File) => {};

  ngOnInit(): void {
    this.imageSrc = this.defaultImageSrc;
  }

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
