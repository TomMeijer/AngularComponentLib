import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TmColumn} from "./config/tm-column";
import {TmPagination} from "./config/tm-pagination";

@Component({
  selector: 'tm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
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
  public className: string;
  @Input()
  public columns: TmColumn[];
  @Input()
  public pagination: TmPagination;
  @Input()
  public data: any[];
  @Input()
  public totalItems: number;

  @Output()
  public onRowClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public resolveValue(obj: any, data: string | ((obj: any) => any)): any {
    if (typeof data === 'string') {
      return data.split('.').reduce((prev, curr) => prev && prev[curr], obj);
    }
    return data(obj);
  }

  public hasColumnNames(): boolean {
    return this.columns.findIndex(col => col.name) !== -1;
  }

}
