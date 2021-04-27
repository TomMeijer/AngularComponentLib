import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'tm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  public striped: boolean;
  @Input()
  public bordered: boolean;
  @Input()
  public small: boolean;
  @Input()
  public hover: boolean;
  @Input()
  public headerTemplate: TemplateRef<any>;
  @Input()
  public rowTemplate: TemplateRef<any>;
  @Input()
  public data: any[];
  @Input()
  public pagination: boolean;
  @Input()
  public itemsPerPage: number;
  @Input()
  public maxPageLinks: number;
  @Input()
  public currentPage: number;
  @Input()
  public totalItems: number;

  @Output()
  public onPageChange: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
