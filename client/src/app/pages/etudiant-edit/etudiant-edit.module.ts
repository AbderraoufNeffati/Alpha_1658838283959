import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantEditComponent } from './etudiant-edit.component';
import { EtudiantEditRoutingModule } from './etudiant-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EtudiantEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EtudiantEditComponent
  ]
})
export class EtudiantEditModule { }
