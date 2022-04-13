import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trandate'
})
export class TrandatePipe implements PipeTransform {
  transform(value: string , d:string): string{
    if(value.length==14&&value!=''){
    var x=value.split("",14);
    if(d=="fulldate"){
    var fulldate=`${x[5]}${x[6]}/${x[3]}${x[4]}/19${x[1]}${x[2]}`;
    return fulldate;
  }
    if(d=="day"){
    var day=`${x[5]}${x[6]}`;
    return day;}
    if(d=="month"){
    var month=`${x[3]}${x[4]}`;
    return month;}
    if(d=="year"){
    var year=`19${x[1]}${x[2]}`;
    return year;}
    return '';
    }else
    {
      return '';
    }

}
}
