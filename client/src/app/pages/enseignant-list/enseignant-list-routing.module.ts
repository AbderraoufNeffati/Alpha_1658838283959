import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantListComponent } from './enseignant-list.component';

const routes: Routes = [
  {
    path: '',
    component: EnseignantListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantListRoutingModule { }
