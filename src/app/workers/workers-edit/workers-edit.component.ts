import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { MyWorkersService } from 'src/app/shared/services/my-workers.service';
import { MyWorkers, MyWorkersType } from 'src/app/shared/models/workers.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { async } from '@angular/core/testing';
import { GetAgeService } from 'src/app/shared/services/get-age.service';


@Component({
  selector: 'app-workers-edit',
  templateUrl: './workers-edit.component.html',
  styleUrls: ['./workers-edit.component.css']
})
export class WorkersEditComponent implements OnInit {
  id: number;
  worker: MyWorkers;
  
  myWorkertype = MyWorkersType;
  workerForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, 
    private myWorkerService: MyWorkersService,
    private router: Router
    )
  {
    this.activatedRoute.params.subscribe((params) => {
      if (!isNullOrUndefined(params.id)){
        this.id = +params.id
        console.log(params)
      }else{
        this.id = null
      }
    })
   }

  ngOnInit(): void {
    this.workerForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required])
    })
    this.getData()
    
  }

  isDataValid(addCase: boolean, changeCase: boolean){
    let age = new GetAgeService

    if (age.isDateValid(this.workerForm.value.birthday) == false) {
      alert('Введите валидную дату')
      this.workerForm.patchValue({
        birthday: undefined
      })
    }else{
      if (addCase == true) this.onAddWorker();
      if (changeCase == true) this.changeData();
    }
    
  }

  async getData(){
    if(!isNullOrUndefined(this.id)){
      try {
        let worker = this.myWorkerService.getOneById(this.id)
        this.worker = await worker;
        console.log(this.worker)
      } catch (error) {
        console.log(error)
      }
      this.workerForm.patchValue({
        id: this.worker.id,
        name: this.worker.name,
        surname: this.worker.surname,
        patronymic: this.worker.patronymic,
        phone: this.worker.phone,
        email: this.worker.email,
        birthday: this.worker.birthday,
        type: this.worker.type
      })
    }
  }

  async deleteData(){
    try {
      await this.myWorkerService.deleteOneById(this.id);
    } catch (error) {
      console.log(error)
    }finally{
      this.router.navigate(["/workers"])
    }   
  }

  async onAddWorker(){
    try {
      let res = await this.myWorkerService.postOne(this.workerForm.value);
      this.router.navigate([this.router.url, res.id])
      this.getData()
    } catch (error) {
      console.log(error)
      alert("Проверьте правильность введеных данных")
    }
  }

  async changeData(){
    try {
      await this.myWorkerService.putOneById(this.id, this.workerForm.value);
    } catch (error) {
      console.log(error)
      alert("Проверьте правильность введеных данных")
    }finally{
      this.getData()
    }
  }
}
