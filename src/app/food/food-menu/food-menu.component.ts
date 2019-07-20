import { TableData } from '../../menu/tableData';
import { FoodService } from '../foodService';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-food-menu',
    templateUrl: './food-menu.component.html',
    styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
    constructor(public foodService: FoodService) { }
    tableData: TableData;

    ngOnInit() {
        if (!this.tableData) {
            this.tableData = {} as TableData;
            this.tableData = {
                columns: [
                    {
                        field: 'name',
                        label: 'نام غذا',
                        filter: true,
                    },
                    {
                        field: 'price',
                        label: 'قیمت',
                        type: 'number',
                        filter: true
                    },
                    {
                        field: 'type',
                        label: 'نوع',
                        type: 'KeyValue',
                        pipeParam: this.foodService.getTypes()
                    },
                    {
                        field: 'id',
                        label: 'شماره غذا'
                    },
                    {
                        field: 'time',
                        label: 'تاریخ ثبت',
                        type: 'time',
                        format: 'jYYYY/jM/jD'
                    }
                ],
                actions: { update: true, delete: true }
            };
        }
    }


}
