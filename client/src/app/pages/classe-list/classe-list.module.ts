import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseListComponent } from './classe-list.component';
import { ClasseListRoutingModule } from './classe-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ClasseListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ClasseListComponent
  ]
})
export class ClasseListModule { }
