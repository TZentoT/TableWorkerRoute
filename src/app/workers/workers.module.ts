import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { WorkersEditComponent } from './workers-edit/workers-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SortPipe } from '../shared/pipes/sort.pipe';
import { AgePipe } from '../shared/pipes/age.pipe';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [WorkersComponent, WorkersListComponent, WorkersEditComponent, SearchPipe, SortPipe, AgePipe],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class WorkersModule { }
