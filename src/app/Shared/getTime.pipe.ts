import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-jalaali';

@Pipe({
  name: 'getTime'
})
export class GetTimeValue implements PipeTransform {
  transform(time: string, format) {
    return moment(time).format(format);
  }
}
