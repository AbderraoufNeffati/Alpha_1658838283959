import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantListComponent } from './etudiant-list.component';

const routes: Routes = [
  {
    path: '',
    component: EtudiantListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantListRoutingModule { }
