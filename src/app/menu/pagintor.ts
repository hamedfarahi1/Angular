import { PageEvent } from '@angular/material';

export class MyPagintor {
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number;
  pageIn: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
