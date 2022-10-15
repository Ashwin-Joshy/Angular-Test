import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value=value.split(' ')[0];
    return 'firstname : '+value;
  }

}
