import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hashtagLimit'})
export class HashtagLimit implements PipeTransform {
  transform(value: any): any {
    if(value.length > 2) {
        return value.slice(0,2);
    } else {
        return value;
    }

  }
}