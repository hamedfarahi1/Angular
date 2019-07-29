import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TableService } from '../menu/table';
import { EmployeesSh } from './employess.sh';
@Injectable({
  providedIn: 'root'
})
export class EmployeesData implements TableService {
  data = {
    menu: [
      {
        id: 1,
        name: 'حامد',
        family: 'فرحی',
        salary: '16000',
        time: '2014-07-15T17:14:31+04:30'
      },
      {
        id: 2,
        name: 'رضا',
        family: 'عباسی',
        salary: '18000',
        time: '2019-07-15T17:14:31+04:30'
      },
      {
        id: 3,
        name: 'مهدی',
        family: 'کاسه آتشین',
        salary: '22000',
        time: '2019-07-07T17:14:31+04:30'
      },
      {
        id: 4,
        name: 'فرزاد',
        family: 'فقیه',
        salary: '16000',
        time: '2018-07-15T17:14:31+04:30'
      },
      {
        id: 5,
        name: 'فرهاد',
        family: 'رضایی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 6,
        name: 'شاهین',
        family: 'رضایی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 7,
        name: 'سجاد',
        family: 'مشهدی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 8,
        name: 'صابر',
        family: 'جمشیدی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 9,
        name: 'کاوه',
        family: 'شاهدی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 10,
        name: 'صالح',
        family: 'قربانی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 11,
        name: 'امیر',
        family: 'اقبالی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 12,
        name: 'کاظم',
        family: 'محمدی',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 13,
        name: 'نصرت',
        family: 'فکوری',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      }
    ],
    count: 13
  };

  constructor() {
    console.log('data created!!');
  }
  read(data?: KeyValue<string, string>[]) {
    const result = { menu: [], count: 0 };
    result.menu = this.data.menu;
    result.count = this.data.count;
    if (data && data.length > 0) {
      if (data.length === 1) {
        result.menu = result.menu.slice(+(data[0].value) * 3, +(data[0].value) * 3 + 3);
        return of(result);
      } else if (data && data.length > 1) {
        for (const elm of this.data.menu) {

          // tslint:disable-next-line:no-shadowed-variable
          result.menu = result.menu.filter(elm => {
            let cond1 = true;
            let cond2 = true;
            let cond3 = true;
            if (data[1]) {
              cond1 = false;
              if (elm.name.includes(data[1].value) && data[1].value.length > 0) {
                cond1 = true;
              }
            }
            if (data[2]) {
              cond2 = false;
              if (elm.family.includes(data[2].value) && data[2].value.length > 0) {
                cond2 = true;
              }
            }
            if (data[3]) {
              cond3 = false;
              if (elm.salary.includes(data[3].value) && data[3].value.length > 0) {
                cond3 = true;
              }
            }
            return cond1 && cond2 && cond3;
          });
        }
        result.count = result.menu.length;
        result.menu = result.menu.slice(+(data[0].value) * 3, +(data[0].value) * 3 + 3);
        return of(result);
      }
    }
    return of(this.data);
  }

  getDetail(id) {
    let person = {} as EmployeesSh;
    for (const elm of this.data.menu) {
      if (elm.id === +id) {
        person = elm;
      }
    }
    return of(person);
  }
  update(person) {
    for (let elm of this.data.menu) {
      console.log(typeof elm.id + typeof person.id);
      if (elm.id === person.id) {
        elm = person;
      }
    }
    return of({ report: 'Seccess' });
  }
  create(person) {
    this.data.menu.push(person);
    this.data.count++;
    return of({ report: 'added' });
  }
  delete(data: any) {
    for (const elm of this.data.menu) {
      if (elm.id === data) {
        // tslint:disable-next-line:no-shadowed-variable
        this.data.menu = this.data.menu.filter(elm => elm.id !== data);
      }
    }
    this.data.count--;
    return of({ report: 'Seccess' });
  }
}
