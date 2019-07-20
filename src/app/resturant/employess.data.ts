import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TableService } from './../menu/tableData';
import { EmployeesSh } from './employess.sh';
@Injectable({
  providedIn: 'root'
})
export class EmployeesData implements TableService {
  data = {
    menu: [
      {
        id: 1,
        name: 'hamed',
        family: 'farahi',
        salary: '16000',
        time: '2014-07-15T17:14:31+04:30'
      },
      {
        id: 2,
        name: 'reza',
        family: 'abbasi',
        salary: '18000',
        time: '2019-07-15T17:14:31+04:30'
      },
      {
        id: 3,
        name: 'mahdi',
        family: 'kase',
        salary: '22000',
        time: '2019-07-07T17:14:31+04:30'
      },
      {
        id: 4,
        name: 'farzad',
        family: 'faghih',
        salary: '16000',
        time: '2018-07-15T17:14:31+04:30'
      },
      {
        id: 5,
        name: 'farhad',
        family: 'rezai',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 6,
        name: 'shahin',
        family: 'rezai',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 7,
        name: 'sajjad',
        family: 'mashhadi',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 8,
        name: 'saber',
        family: 'jamshidi',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 9,
        name: 'kaveh',
        family: 'shahedi',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 10,
        name: 'saleh',
        family: 'ghorbani',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 11,
        name: 'amir',
        family: 'eghbali',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 12,
        name: 'kazem',
        family: 'mohammadi',
        salary: '62100',
        time: '2016-07-15T17:14:31+04:30'
      },
      {
        id: 13,
        name: 'nosrat',
        family: 'fakoori',
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
            let cond = false;
            if (data[1]) {
              if (elm.name.includes(data[1].value) && data[1].value.length > 0) {
                cond = true;
              }
            }
            if (data[2]) {
              if (elm.name.includes(data[2].value) && data[2].value.length > 0) {
                cond = true;
              }
            }
            if (data[3]) {
              if (elm.name.includes(data[3].value) && data[3].value.length > 0) {
                cond = true;
              }
            }
            return cond;
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
