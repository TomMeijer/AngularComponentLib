import {Component, ElementRef, forwardRef, input, OnInit, output, viewChild, signal, effect} from '@angular/core';
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
  public imageInputElement = viewChild<ElementRef>('imageInput');

  public name = input<string>();
  public width = input('170px');
  public height = input('170px');
  public loading = input<boolean>();
  public loaderAnimation = input<'progress' | 'progress-dark' | 'pulse' | 'false'>('progress');
  public defaultImageSrc = input<string>();
  public required = input<boolean>();
  public clearable = input<boolean>();
  public rounded = input<boolean>();
  public uploadIcon = input('bi bi-pencil');
  public clearIcon = input('bi bi-trash');

  public onClear = output<MouseEvent>();

  public imageSrc = signal<string>(undefined);

  public _value: File;
  private onChangeFn = (value: File) => {};

  constructor() {
    effect(() => {
      if (!this._value) {
        this.imageSrc.set(this.defaultImageSrc());
      }
    });
  }

  ngOnInit(): void {
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
        this.imageSrc.set(reader.result as string);
      };
    } else {
      this.imageSrc.set(this.defaultImageSrc());
    }
  }

  public clearImage(event: MouseEvent): void {
    this.value = null;
    this.imageInputElement().nativeElement.value = '';
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
