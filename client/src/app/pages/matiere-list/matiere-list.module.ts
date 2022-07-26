import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatiereListComponent } from './matiere-list.component';
import { MatiereListRoutingModule } from './matiere-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MatiereListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MatiereListComponent
  ]
})
export class MatiereListModule { }
