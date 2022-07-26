import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatiereEditComponent } from './matiere-edit.component';
import { MatiereEditRoutingModule } from './matiere-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MatiereEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MatiereEditComponent
  ]
})
export class MatiereEditModule { }
