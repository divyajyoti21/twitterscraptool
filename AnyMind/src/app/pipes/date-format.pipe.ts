import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFormat'})
export class DateFormat implements PipeTransform {
  transform(value: any): any {
    let date = value.toString();
    let t1 = date.indexOf("-");
    let newDate = date.substring(t1+1,date.length);
    let year = newDate.substring(newDate.length-5,newDate.length);
    let month = newDate.substring(newDate.length-8,newDate.length-4);
    let day = newDate.substring(1,newDate.length-8);
    return month + " " + day + "," + year;
    //let day = newDate.substring(0,newDate.indexOf(" "));
    //let monthYear = newDate.substring(newDate.indexOf(" ")+1,newDate.length);
    //let month = monthYear.substring(0,monthYear.indexOf(" "));
    //let year = monthYear.substring(monthYear.indexOf(" ")+1,monthYear.length);
    //return day;
  }
}