import { FoodDetail } from '../FoodDetail';
import { FoodService } from '../foodService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'jalali-moment';


@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
    types: any;
    food: FoodDetail;
    formData: FormData = new FormData();
    detail = false;
    dateObject = moment();
    deleteMessage = '';
    constructor(
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private foodService: FoodService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.formData = new FormData();
        let path: string;
        this.food = {} as FoodDetail;
        this.dateObject = moment();
        this.route.url.subscribe(param => {
            path = param[1].path;
        });

        this.types = this.foodService.getTypes();
        if (path !== 'create') {
            this.route.params.subscribe(params => {
                this.foodService.getDetail(params.id).subscribe(res => {
                    this.food = res;
                });
            });
            if (path === 'detail') {
                this.detail = true;
            }
        }
    }
    submit() {
        if (this.food.id) {
            this.updateFoodInfo();
        } else {
            this.createFoodInfo();
        }
    }
    updateFoodInfo() {
        this.foodService.update(this.food).subscribe(res => {
            this.toastr.success('Updated', 'Update Message');
            this.router.navigate(['food']);
        });
    }

    createFoodInfo() {
        this.formData.append('name', this.food.name);
        this.formData.append('price', this.food.price);
        this.formData.append('type', this.food.type + '');
        this.formData.append('dataObject', this.dateObject.format());
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

}
