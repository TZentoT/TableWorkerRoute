import { Component, OnInit } from '@angular/core';
import { MyWorkersType, MyWorkers } from '../shared/models/workers.model';
import { Router } from '@angular/router';
import { MyWorkersService } from '../shared/services/my-workers.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  
  workers: MyWorkers[] = [];
  myWorkersType = MyWorkersType;

  searchStr: string = "";

  constructor(
    private myWorkerService: MyWorkersService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    try {
      let workers = await this.myWorkerService.getAll();
      this.workers = isNullOrUndefined(await workers) ? [] : await workers;
    } catch (error) {
      console.log(error)
    }
  }

  getByType(type: number) {
    return this.workers.filter(worker => worker.type === type)
  }

  async onDeleteWorker(id: number) {
    try {
     await this.myWorkerService.deleteOneById(id)
    } catch (error) {
      console.log(error)
    }finally{
      this.getData()
    }
  }

  onAddWorker(){
    this.router.navigate([this.router.url, 'profile'])
  }

}
