import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseEditComponent } from './classe-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClasseEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseEditRoutingModule { }
