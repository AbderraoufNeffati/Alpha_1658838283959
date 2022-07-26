import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseEditComponent } from './classe-edit.component';
import { ClasseEditRoutingModule } from './classe-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ClasseEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ClasseEditComponent
  ]
})
export class ClasseEditModule { }
