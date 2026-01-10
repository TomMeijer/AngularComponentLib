import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'tm-table',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    PaginationModule,
    FormsModule
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  public loading: boolean;
  @Input()
  public striped: boolean;
  @Input()
  public bordered: boolean;
  @Input()
  public small: boolean;
  @Input()
  public hover: boolean;
  @Input()
  public responsive: boolean;
  @Input()
  public headerTemplate: TemplateRef<any>;
  @Input()
  public rowTemplate: TemplateRef<any>;
  @Input()
  public data: any[];
  @Input()
  public pagination: boolean;
  @Input()
  public itemsPerPage = 10;
  @Input()
  public maxPageLinks = 5;
  @Input()
  public pageBoundaryLinks = true;
  @Input()
  public currentPage: number;
  @Input()
  public totalItems: number;

  @Output()
  public onPageChange: EventEmitter<number> = new EventEmitter();
}
