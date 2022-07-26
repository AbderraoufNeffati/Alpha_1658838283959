import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantListComponent } from './etudiant-list.component';
import { EtudiantListRoutingModule } from './etudiant-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EtudiantListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EtudiantListComponent
  ]
})
export class EtudiantListModule { }
