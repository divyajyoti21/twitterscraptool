import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'trimText'})
export class TrimText implements PipeTransform {
  transform(value: string): string {
    if(value.length > 50) {
        return value.slice(0,49) + '...';
    } else {
        return value;
    }

  }
}