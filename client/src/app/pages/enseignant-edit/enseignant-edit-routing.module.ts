import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantEditComponent } from './enseignant-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EnseignantEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantEditRoutingModule { }
