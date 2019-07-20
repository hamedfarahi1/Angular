import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetParam {
  get(data: KeyValue<string, string>[]) {
    if (data && data.length > 0) {
      let str = '?';
      for (const ele of data) {
        str = str + ele.key + '=' + ele.value + '&';
      }
      str = str.slice(0, -1);
      return str;
    }
    return '';
  }
}
