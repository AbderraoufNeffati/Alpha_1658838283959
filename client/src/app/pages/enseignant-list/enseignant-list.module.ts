import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantListComponent } from './enseignant-list.component';
import { EnseignantListRoutingModule } from './enseignant-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    EnseignantListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    EnseignantListComponent
  ]
})
export class EnseignantListModule { }
