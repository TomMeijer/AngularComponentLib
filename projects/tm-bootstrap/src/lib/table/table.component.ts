import {Component, input, output, TemplateRef} from '@angular/core';
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
  public loading = input<boolean>();
  public striped = input<boolean>();
  public bordered = input<boolean>();
  public small = input<boolean>();
  public hover = input<boolean>();
  public responsive = input<boolean>();
  public headerTemplate = input<TemplateRef<any>>();
  public rowTemplate = input<TemplateRef<any>>();
  public data = input<any[]>();
  public pagination = input<boolean>();
  public itemsPerPage = input(10);
  public maxPageLinks = input(5);
  public pageBoundaryLinks = input(true);
  public currentPage = input<number>();
  public totalItems = input<number>();

  public onPageChange = output<number>();
}
