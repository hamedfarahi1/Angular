import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-food-image',
    templateUrl: './food-image.component.html',
    styleUrls: ['./food-image.component.css'],
})
export class FoodImageComponent implements OnInit {
    @Input() id: number;
    constructor() { }
    ngOnInit() { }
}
