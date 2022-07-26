import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantEditComponent } from './etudiant-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EtudiantEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantEditRoutingModule { }
