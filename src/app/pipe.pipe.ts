import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

 transform(value: string[], args?: string): string[] {
    if (args === 'alphabatecially') {
      return value.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    } 
    
    return value;
  }

}