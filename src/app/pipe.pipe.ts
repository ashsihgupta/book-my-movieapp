import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  sort:any;
  MovieApiarray:any=[];
          


    

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

  //   else if (args === 'option') {


  //      return value.sort((a: any) => {
  //        this.sort = JSON.parse(sessionStorage.getItem('sortoption'));
  //        this.MovieApiarray = JSON.parse(sessionStorage.getItem('keyseat'));
  //       if (a.language ===this.sort) {
  //         return 1;
        
  //       } else {
  //         return 0;
  //       }
  //     });
    
    
  // }


  else if (args === 'language') {
     this.sort = JSON.parse(sessionStorage.getItem('sortoption'));
     console.log(this.sort);
    this.MovieApiarray = JSON.parse(sessionStorage.getItem('moviearray'));
    return this.MovieApiarray.filter(data => data.language===this.sort);
      return value.sort((a: any, b: any) => {
        if (a.language < b.language) {
          return -1;
        } else if (a.language > b.language) {
          return 1;
        } else {
          return 0;
        }
      });
    } 

return value;
}
}