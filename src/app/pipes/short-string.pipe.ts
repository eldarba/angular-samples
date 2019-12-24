import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString'
})
export class ShortStringPipe implements PipeTransform {

  transform(value: any, begin:number, chars:number): any {
    if(value.length > begin && value.length > begin + chars){
      return value.substr(begin, chars) + "...";
    }else{
      return value;
    }
  }

}

