import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyEnglish'
})
export class OnlyEnglishPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.replace(/[^\w\s]/gi, '');
    return value;
  }

}
