import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamenEditComponent } from './examen-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExamenEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamenEditRoutingModule { }
