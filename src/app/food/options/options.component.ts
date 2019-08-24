import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'jalali-moment';
import { ToastrService } from 'ngx-toastr';
import { FoodDetail } from '../food-detail';
import { FoodService } from '../food-service';


@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
    foodForm = this.fb.group({
        dateObject: [moment()],
        id: [Validators.required],
        type: [],
        name: ['', Validators.required],
        price: ['', Validators.required],
        image: [File]
    });
    types: any;
    food: FoodDetail;
    formData: FormData = new FormData();
    constructor(
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private foodService: FoodService,
        private router: Router,
        private fb: FormBuilder,
        private location: Location
    ) { }

    ngOnInit() {
        this.formData = new FormData();
        let path: string;
        this.food = {} as FoodDetail;
        this.route.url.subscribe(param => {
            path = param[1].path;
        });
        this.types = this.foodService.getTypes();
        if (path !== 'create') {
            this.route.params.subscribe(params => {
                this.foodService.getDetail(params.id).subscribe(res => {
                    // tslint:disable-next-line:no-string-literal
                    res['dateObject'] = moment(res['dateObject'], 'YYYY-MM-DD-hh-mm-ss');
                    this.foodForm.patchValue(res);
                });
            });
        }
    }

    submit() {
        if (this.food.id) {
            this.updateFoodInfo();
        } else {
            this.createFoodInfo();
        }
    }
    back() {
        this.location.back();
    }
    updateFoodInfo() {
        this.foodService.update(this.food).subscribe(res => {
            this.toastr.success('Updated', 'Update Message');
            this.router.navigate(['food']);
        });
    }

    createFoodInfo() {
        this.formData.append('name', this.foodForm.get('name').value);
        this.formData.append('price', this.foodForm.get('price').value);
        this.formData.append('type', this.foodForm.get('type').value + '');
        this.formData.append('dataObject', this.foodForm.get('dateObject').value.format());
        this.foodService.create(this.formData).subscribe(res => {
            this.router.navigate(['food']);
        });
    }

    processFile(imageInput: any) {
        const file: File = imageInput.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            this.formData.append('image', file);
        });
        reader.readAsDataURL(file);
    }

    onSubmit(event: any) {
        console.log(event);
    }
}
