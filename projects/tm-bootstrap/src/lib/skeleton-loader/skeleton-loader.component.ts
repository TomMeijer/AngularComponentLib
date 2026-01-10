import {Component, Input} from '@angular/core';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';

@Component({
  selector: 'tm-skeleton-loader',
  standalone: true,
  imports: [
    NgxSkeletonLoaderModule
  ],
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {
  @Input()
  public appearance: 'circle' | 'line' | 'custom-content';
  @Input()
  public animation: 'progress' | 'progress-dark' | 'pulse' | 'false';
  @Input()
  public count = 1;
  @Input()
  public height: string;
  @Input()
  public width: string;
  @Input()
  public marginTop: string;
  @Input()
  public marginBottom: string;
  @Input()
  public marginLeft: string;
  @Input()
  public marginRight: string;
}
