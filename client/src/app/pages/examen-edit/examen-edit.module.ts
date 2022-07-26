import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenEditComponent } from './examen-edit.component';
import { ExamenEditRoutingModule } from './examen-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExamenEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExamenEditComponent
  ]
})
export class ExamenEditModule { }
