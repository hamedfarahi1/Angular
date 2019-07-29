import { PageEvent } from '@angular/material';

export class MyPagintor {
  length: number;
  pageSize = 3;
  pageSizeOptions: number[] = [3, 6, 9];
  pageIndex: number;

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
