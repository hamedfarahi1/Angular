import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { TableData, TableService } from '../table';
import { DeleteComponent } from './../delete/delete.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialogConfig, MatDialog, MatPaginator } from '@angular/material';
import { KeyValue, JsonPipe } from '@angular/common';
import { MyPagintor } from '../pagintor';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { pairwise, take, filter } from 'rxjs/operators';




@Component({
  selector: 'app-table-hmd',
  templateUrl: './table-hmd.component.html',
  styleUrls: ['./table-hmd.component.scss']
})
export class TableHmdComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @Input() tableData1: TableData;
  @Input() service: TableService;
  data;
  deleteMessage = '';
  filterData: KeyValue<string, string>[];
  pager: MyPagintor = {} as MyPagintor;
  col = [];
  constructor(private toastr: ToastrService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

  readPage(event) {
    const res = [];
    res.push({ key: 'page', value: event.pageIndex });
    if (this.filterData) {
      for (const ele of this.filterData) {
        res.push(ele);
      }
    }
    this.read(res);
    this.router.navigate([], {
      queryParams: {
        page: event.pageIndex,
        pageSize: event.pageSize, filter: JSON.stringify(this.filterData)
      }
    });
  }

  ngOnInit() {

    for (const ele of this.tableData1.columns) {
      this.col.push(ele.field);
    }
    if (this.tableData1.actions.action) { this.col.push('actions'); }
    const res: KeyValue<string, string>[] = [];
    this.pager.pageSize = 3;
    this.route.queryParams.subscribe(params => {
      if (params.page) {
        this.pager.pageIndex = +params.page;
        res.push({ key: 'page', value: params.page });
      } else {
        this.pager.pageIndex = 0;
        res.push({ key: 'page', value: '0' });
      }
      if (params.filter) {
        this.filterData = JSON.parse(params.filter);
        for (const ele of this.filterData) {
          res.push(ele);
          for (const elem of this.tableData1.columns) {
            if (ele.key === elem.field) {
              elem.filterValue = ele.value;
            }
          }
        }
      }
    });
    this.read(res);
  }
  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'تعداد در هر صفحه';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const end = (page * pageSize + 3) > length ? length : page * pageSize + 3;
      const start = end === length ? length : page * pageSize + 1;
      return ` ${start}  -   ${end}  از  ${length}  `;
    };
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
      } else {
        this.data = [];
        this.pager.length = 0;
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
