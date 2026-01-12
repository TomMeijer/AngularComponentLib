import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show header if headerTitle is provided', () => {
    fixture.componentRef.setInput('headerTitle', 'Test Title');
    fixture.detectChanges();
    expect(component.hasHeader()).toBeTrue();
    const header = fixture.nativeElement.querySelector('.card-header');
    expect(header).toBeTruthy();
    expect(header.textContent).toContain('Test Title');
  });

  it('should show footer if footerText is provided', () => {
    fixture.componentRef.setInput('footerText', 'Test Footer');
    fixture.detectChanges();
    expect(component.hasFooter()).toBeTrue();
    const footer = fixture.nativeElement.querySelector('.card-footer');
    expect(footer).toBeTruthy();
    expect(footer.textContent).toContain('Test Footer');
  });

  it('should show top image if imgTopSrc is provided', () => {
    fixture.componentRef.setInput('imgTopSrc', 'test-image.png');
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('.card-img-top');
    expect(img).toBeTruthy();
    expect(img.src).toContain('test-image.png');
  });

  it('should show bottom image if imgBottomSrc is provided', () => {
    fixture.componentRef.setInput('imgBottomSrc', 'test-image.png');
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('.card-img-bottom');
    expect(img).toBeTruthy();
    expect(img.src).toContain('test-image.png');
  });
});
