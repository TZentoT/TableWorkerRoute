import { Pipe, PipeTransform } from '@angular/core';
import { MyWorkers } from '../models/workers.model';
import { GetAgeService } from '../services/get-age.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(workerList: MyWorkers[], filterID: number, filterAge): any {

    let age = new GetAgeService

    if (filterID == 1) {
      workerList.sort(function(a,b){
        return a.id - b.id
      })
    }
    
    if (filterID == 2){
      workerList.sort(function(a,b){
        return b.id - a.id
      })
    }

    if (filterAge == 1){
      workerList.sort(function(a,b){
        return age.getAge(a.birthday) - age.getAge(b.birthday);
      })
    }

    if (filterAge == 2){
      workerList.sort(function(a,b){
        return age.getAge(b.birthday) - age.getAge(a.birthday);
      })
    }

    return workerList;
  }
}

