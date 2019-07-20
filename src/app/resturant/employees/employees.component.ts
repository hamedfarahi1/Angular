import { TableData } from 'src/app/menu/tableData';
import { Component, OnInit } from '@angular/core';
import { EmployeesData } from '../employess.data';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  tableData: TableData;

  constructor(public service: EmployeesData) { }

  ngOnInit() {

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
            format: 'jYYYY/jM/jD'
          }
        ],
        actions: {
          update: true,
          delete: true
        }
      };
    }
  }
}
