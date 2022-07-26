import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamenListComponent } from './examen-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExamenListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamenListRoutingModule { }
