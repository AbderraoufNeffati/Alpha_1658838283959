import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantEditComponent } from './enseignant-edit.component';
import { EnseignantEditRoutingModule } from './enseignant-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EnseignantEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EnseignantEditComponent
  ]
})
export class EnseignantEditModule { }
