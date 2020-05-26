import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(age: number): string {

    let residue = age%10;
    
    if (age != 11 && age !=12 && age != 13 && age != 14 && age != 111) {
      if ( residue == 1 )  return `${age} год`
      if ( residue >= 2 && residue <= 4) return  `${age} года`
      if ( residue >= 5 || residue == 0) return  `${age} лет`
     
      
    } else return `${age} лет`
    
   
  }

}
