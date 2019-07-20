import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { TableData, TableService } from './../tableData';
import { DeleteComponent } from './../delete/delete.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { KeyValue } from '@angular/common';
import { MyPagintor } from '../pagintor';


@Component({
  selector: 'app-table-hmd',
  templateUrl: './table-hmd.component.html',
  styleUrls: ['./table-hmd.component.css']
})
export class TableHmdComponent implements OnInit {
  @Input() tableData1: TableData;
  @Input() service: TableService;
  data;
  deleteMessage = '';
  filterData: KeyValue<string, string>[];
  pager: MyPagintor = {} as MyPagintor;
  constructor(private toastr: ToastrService, private dialog: MatDialog) { }
  readPage(event) {
    this.pager.pageIn = event.pageIndex;
    const res = [];

    res.push({ key: 'page', value: event.pageIndex });
    if (this.filterData) {
      for (const ele of this.filterData) {
        res.push(ele);
      }
    }
    this.read(res);
  }
  ngOnInit() {
    this.pager.pageIn = 0;
    const res: KeyValue<string, string>[] = [];
    this.pager.pageSize = 3;
    this.pager.pageSizeOptions = [3, 6, 9];
    res.push({ key: 'page', value: '0' });
    this.read(res);
  }

  filter(result?: KeyValue<string, string>[]) {
    const res = [];
    this.filterData = result;
    res.push({ key: 'page', value: '0' });
    for (const ele of result) {
      res.push(ele);
    }
    this.pager.pageIndex = 0;
    this.read(res);
  }

  read(result?: KeyValue<string, string>[]) {
    this.service.read(result).subscribe(res => {
      if (res.menu) {
        this.data = res.menu;
        this.pager.length = res.count;
      }
    });
  }

  openDeleteDialog(event: MouseEvent, value: any) {
    event.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '200px';
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);
    dialogRef.componentInstance.data = { data: value, service: this.service };
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.toastr.success(data, 'Delete Message ');
      }
      const res: KeyValue<string, string>[] = [];
      res.push({ key: 'page', value: '0' });
      this.pager.pageIndex = 0;
      this.read(res);
    });
  }
}
