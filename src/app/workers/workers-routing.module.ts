import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersComponent } from './workers.component';
import { WorkersEditComponent } from './workers-edit/workers-edit.component';


const routes: Routes = [
  {
    path:'',
    component: WorkersComponent
  },
  {
    path:'profile',
    component: WorkersEditComponent
  },
  {
    path:'profile/:id',
    component: WorkersEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
