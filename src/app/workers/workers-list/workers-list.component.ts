import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkers } from 'src/app/shared/models/workers.model';
import { MyWorkersService } from 'src/app/shared/services/my-workers.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { GetAgeService } from 'src/app/shared/services/get-age.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  @Input() title: string
  @Input() workers: MyWorkers[] = []

  @Output() deleteWorker = new EventEmitter<number>();

  isIdUp: number = 1;
  isAgeUp: number = 0;
  sortId: number = 1;
  sortAge: number = 0;
  

  constructor(private router: Router, private age: GetAgeService) { }

  ngOnInit(): void {

  }

  sortByIdUp() {
    this.sortId = 1
    this.sortAge = 0
  }

  sortByIdDown() {
    this.sortId = 2
    this.sortAge = 0
  }

  sortByAgeUp(){
    this.sortAge = 1
    this.sortId = 0
  }

  sortByAgeDown(){
    this.sortAge = 2
    this.sortId = 0
  }

  onDeleteWorker(id: number){
    this.deleteWorker.emit(id)
  }

  onLinkProfile(id: number){
    this.router.navigate([this.router.url,'profile', id])
  }

  getAge(birthday){
    return this.age.getAge(birthday)
  }

}
