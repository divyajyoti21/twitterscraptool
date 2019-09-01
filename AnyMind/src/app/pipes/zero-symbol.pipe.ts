import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'zeroSymbol'})
export class ZeroSymbol implements PipeTransform {
  transform(value: number): string {
    if(value == 0) {
        return '-';
    } else {
        return value.toString();
    }

  }
}