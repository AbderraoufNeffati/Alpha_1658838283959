import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenListComponent } from './examen-list.component';
import { ExamenListRoutingModule } from './examen-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamenListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamenListComponent
  ]
})
export class ExamenListModule { }
