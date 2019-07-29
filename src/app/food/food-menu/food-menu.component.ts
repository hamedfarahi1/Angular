import { TableData } from '../../menu/table';
import { FoodService } from '../food-service';
import { Component, OnInit } from '@angular/core';
import { RouterExtService } from 'src/app/routerService';

@Component({
    selector: 'app-food-menu',
    templateUrl: './food-menu.component.html',
    styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

    constructor(public foodService: FoodService, private routerService: RouterExtService) { }
    tableData: TableData;

    ngOnInit() {
        console.log(this.routerService.getPreviousUrl());
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
                actions: {
                    action: true, update: true, delete: true
                    , other: {
                        label: 'گالری',
                        link: './gallery',
                        icon: 'photo'
                    }
                }

            };
        }
    }


}
