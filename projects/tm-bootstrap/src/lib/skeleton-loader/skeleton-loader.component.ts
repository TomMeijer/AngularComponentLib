import {Component, input} from '@angular/core';
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
  public appearance = input<'circle' | 'line' | 'custom-content'>();
  public animation = input<'progress' | 'progress-dark' | 'pulse' | 'false'>();
  public count = input(1);
  public height = input<string>();
  public width = input<string>();
  public marginTop = input<string>();
  public marginBottom = input<string>();
  public marginLeft = input<string>();
  public marginRight = input<string>();
}
