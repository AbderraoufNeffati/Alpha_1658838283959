import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseListComponent } from './classe-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClasseListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseListRoutingModule { }
