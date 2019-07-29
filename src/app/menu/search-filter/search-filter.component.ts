import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableData } from '../table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() tableData: TableData;
  @Output() searched = new EventEmitter<KeyValue<string, string>[]>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }
  submit() {
    const result: KeyValue<string, string>[] = [];
    for (const ele of this.tableData.columns) {
      if (ele.filter && ele.filterValue && ele.filterValue.trim().length > 0) {
        result.push({ key: ele.field, value: ele.filterValue.trim() });
      }
    }
    this.searched.emit(result);
    this.router.navigate([], {
      queryParams: {
        page: 0,
        pageSize: 3,
        filter: JSON.stringify(result)
      }
    });
  }
}
