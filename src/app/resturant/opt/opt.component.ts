import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment-jalaali';
import { EmployeesData } from './../employess.data';
import { EmployeesSh } from './../employess.sh';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptComponent implements OnInit {
  personForm = this.fb.group({
    id: [Validators.required],
    name: ['', Validators.required],
    family: ['', Validators.required],
    salary: ['', Validators.required],
    time: [moment()],
  });
  dateObject = moment();
  types: any;
  person: EmployeesSh;
  update = false;
  deleteMessage = '';

  constructor(
    private route: ActivatedRoute,
    private service: EmployeesData,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.person = {} as EmployeesSh;
    let path: string;
    this.route.url.subscribe(param => {
      path = param[1].path;
    });
    if (path === 'update') {

      this.update = true;
      this.route.params.subscribe(params => {
        this.service.getDetail(params.id).subscribe(res => {
          // tslint:disable-next-line:no-string-literal
          res['time'] = moment(moment(res['time']).format('jYYYY/jMM/jDD'));
          this.personForm.patchValue(res);
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
  back() {
    this.location.back();
  }
  createFoodInfo() {
    this.service.create(this.personForm.value).subscribe(res => {
      this.router.navigate(['resturant']);
    });
  }
  updateFoodInfo() {
    this.service.update(this.personForm.value).subscribe(res => {
      this.router.navigate(['resturant']);
    });
  }
  onSubmit(event: any) {
    console.log(event);
    this.service.create(event).subscribe(res => {
      this.router.navigate(['resturant']);
    });
  }
}
