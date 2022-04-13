import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {
  transform(value: string ): string{
    if(value.length==16&&value!=''){
  var x=value.split("",16);
  var f=`${x[0]}${x[1]}${x[2]}${x[3]}-${x[4]}${x[5]}${x[6]}${x[7]}-${x[8]}${x[9]}${x[10]}${x[11]}-${x[12]}${x[13]}${x[14]}${x[15]}`
    return f;}
    else{
      return "";
    }
  }

}
