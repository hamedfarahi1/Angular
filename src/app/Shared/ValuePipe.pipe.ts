import { Pipe, PipeTransform, Injectable } from "@angular/core";
import { KeyValue } from "@angular/common";
@Injectable({
  providedIn: "root"
})
@Pipe({
  name: "getValue"
})
export class Value implements PipeTransform {
  transform(key: number, types: KeyValue<number, string>[]) {
    // let ret = "not found";
    // console.log(types);
    // types.forEach(element => {
    //   if (element.key === key) {
    //     ret = element.value;
    //   }
    // });
    // return ret;
    const index = types.findIndex(element => element.key === key);
    if (index >= 0) {
      return types[index].value;
    }
    return null;
  }
}
