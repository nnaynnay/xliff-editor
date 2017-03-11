import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value !== 'object') {
      return value;
    }
    let arr = [];
    Object.keys(value).forEach((key) => {
      arr.push({
        $key: key,
        $value: value[key]
      });
    });
    return arr;
  }

}
