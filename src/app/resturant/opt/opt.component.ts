import { EmployeesData } from './../employess.data';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesSh } from './../employess.sh';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptComponent implements OnInit {
  dateObject = moment();
  types: any;
  person: EmployeesSh;
  detail = false;
  update = false;
  deleteMessage = '';

  constructor(
    private route: ActivatedRoute,
    private service: EmployeesData,
    private router: Router
  ) { }

  ngOnInit() {
    this.person = {} as EmployeesSh;
    let path: string;
    this.route.url.subscribe(param => {
      path = param[1].path;
      console.log(path);
    });
    if (path === 'update') {

      this.update = true;
      this.route.params.subscribe(params => {
        this.service.getDetail(params.id).subscribe(res => {
          this.person = res;
        });
      });
    }
  }
  submit() {
    if (this.update) {
      this.updateFoodInfo();
    } else {
      this.createFoodInfo();
    }
  }
  createFoodInfo() {
    this.person.time = this.dateObject.locale('en').format();
    this.service.create(this.person).subscribe(res => {
      this.router.navigate(['resturant']);
    });
  }
  updateFoodInfo() {
    this.person.time = this.dateObject.locale('en').format();
    this.service.update(this.person).subscribe(res => {
      this.router.navigate(['resturant']);
    });
  }
}
