import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:Date): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.abs(todayWithNoTime-value)
    const secondsInADay= 86400;
    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInADay;
    if (dateCounter >0 && value > todayWithNoTime){
        return 0;
    }else{
        return Math.round(dateCounter);
    }
  }
}
