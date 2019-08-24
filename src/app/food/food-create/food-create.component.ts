import { Component, OnInit } from '@angular/core';
import { GenericFormField } from 'src/app/Shared/generic-form/generic-form.component';
import { Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment-jalaali';
import { ValidateAge } from 'src/app/Shared/my-validator';
@Component({
    selector: 'app-food-create',
    templateUrl: './food-create.component.html',
    styleUrls: ['./food-create.component.scss']
})
export class FoodCreateComponent implements OnInit {

    fields: Array<GenericFormField> = [
        { name: 'firstName', title: 'نام', formType: 'text', validators: [Validators.required], value: '' },
        { name: 'lastName', title: 'نام خانوادگی', formType: 'text', validators: [Validators.required], value: '' },
        {
            name: 'nation', title: 'ملیت', formType: 'multiSelectKey',
            lookups: [{ key: '', value: 'ایران' }, { key: '0', value: 'آلمان' }, { key: '1', value: 'انگلیس' },
            { key: '2', value: 'ایتالیا' }],
            value: []
        },
        { name: 'age', title: 'سن', formType: 'number', value: '', validators: [Validators.required, ValidateAge] },
        { name: 'policy', title: 'قوانین را قبول دارید؟', formType: 'checkbox', value: false, validators: [Validators.requiredTrue] },
        { name: 'date', title: 'تاریخ', formType: 'date', value: moment() }
    ];


    formGroups = [
        { name: 'first-group' }
    ];
    constructor() { }

    ngOnInit() {
    }
    create(myform: FormGroup) {
        console.log(myform.value);
    }
}
