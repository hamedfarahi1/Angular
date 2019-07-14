import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "jalali-moment";

@Pipe({
  name: "getTime"
})
export class getTimeValue implements PipeTransform {
  transform(time: string, format) {
    const date = moment(time);
    return date
      .clone()
      .locale("fa")
      .format(format);
  }
}
