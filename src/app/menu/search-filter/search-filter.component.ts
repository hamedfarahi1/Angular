import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '../tableData';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Input() columns: TableColumn[];
  @Output() searched = new EventEmitter<KeyValue<string, string>[]>();

  constructor() { }

  ngOnInit() {
  }
  submit() {
    const result: KeyValue<string, string>[] = [];
    for (const ele of this.columns) {
      if (ele.filter && ele.filterValue && ele.filterValue.trim().length > 0) {
        result.push({ key: ele.field, value: ele.filterValue.trim() });
      }
    }
    this.searched.emit(result);
  }
}
