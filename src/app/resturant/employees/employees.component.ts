import { TableData } from 'src/app/menu/table';
import { Component, OnInit } from '@angular/core';
import { EmployeesData } from '../employess.data';
import { RouterExtService } from 'src/app/routerService';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  tableData: TableData;

  constructor(public service: EmployeesData, private routerService: RouterExtService) { }

  ngOnInit() {
    console.log(this.routerService.getPreviousUrl());
    if (!this.tableData) {
      this.tableData = {
        columns: [
          {
            field: 'name',
            label: 'نام ',
            filter: true
          },
          {
            field: 'family',
            label: 'نام خانوادگی',
            filter: true
          },
          {
            field: 'salary',
            label: 'حقوق',
            type: 'number',
            filter: true
          },
          {
            field: 'time',
            label: 'تاریخ ثبت',
            type: 'time',
            format: 'jYYYY/jMM/jDD'
          }
        ],
        actions: {
          action: true,
          update: true,
          delete: true
        },
        rate: true
      };
    }
  }
}
