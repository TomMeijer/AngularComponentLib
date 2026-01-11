import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageUploaderComponent } from './image-uploader.component';
import { By } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUploaderComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update imageSrc when a file is selected', async () => {
    const file = new File([''], 'test-image.png', { type: 'image/png' });
    const inputElement = fixture.debugElement.query(By.css('input[type="file"]')).nativeElement;

    // Simulate file selection
    Object.defineProperty(inputElement, 'files', {
      value: [file]
    });
    inputElement.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    // Wait for FileReader
    await new Promise(resolve => setTimeout(resolve, 100));
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('data:image/png;base64');
  });

  it('should update imageSrc when defaultImageSrc input changes and no file is selected', async () => {
    fixture.componentRef.setInput('defaultImageSrc', 'default.png');
    fixture.detectChanges();

    let imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('default.png');

    fixture.componentRef.setInput('defaultImageSrc', 'new-default.png');
    fixture.detectChanges();

    imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('new-default.png');
  });
});
