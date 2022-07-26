import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatiereListComponent } from './matiere-list.component';

const routes: Routes = [
  {
    path: '',
    component: MatiereListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereListRoutingModule { }
