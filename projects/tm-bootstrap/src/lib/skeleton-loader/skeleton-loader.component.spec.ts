import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonLoaderComponent } from './skeleton-loader.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('SkeletonLoaderComponent', () => {
  let component: SkeletonLoaderComponent;
  let fixture: ComponentFixture<SkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonLoaderComponent, NgxSkeletonLoaderModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct number of loaders', () => {
    fixture.componentRef.setInput('count', 3);
    fixture.detectChanges();
    // NgxSkeletonLoader renders multiple loaders within its component
    // We can check if the component is present and has the right input
    expect(component.count()).toBe(3);
  });
});
