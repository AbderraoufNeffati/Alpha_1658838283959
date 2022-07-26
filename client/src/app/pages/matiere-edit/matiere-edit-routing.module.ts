import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatiereEditComponent } from './matiere-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MatiereEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereEditRoutingModule { }
