// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { ClasseEditComponent} from './pages/classe-edit/classe-edit.component';
import { ClasseListComponent} from './pages/classe-list/classe-list.component';
import { EnseignantEditComponent} from './pages/enseignant-edit/enseignant-edit.component';
import { EnseignantListComponent} from './pages/enseignant-list/enseignant-list.component';
import { EtudiantEditComponent} from './pages/etudiant-edit/etudiant-edit.component';
import { EtudiantListComponent} from './pages/etudiant-list/etudiant-list.component';
import { ExamenEditComponent} from './pages/examen-edit/examen-edit.component';
import { ExamenListComponent} from './pages/examen-list/examen-list.component';
import { MatiereEditComponent} from './pages/matiere-edit/matiere-edit.component';
import { MatiereListComponent} from './pages/matiere-list/matiere-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'classes/:id',  loadChildren: './pages/classe-edit/classe-edit.module#ClasseEditModule' , canActivate: [AuthGuard] },
    { path: 'classes',  loadChildren: './pages/classe-list/classe-list.module#ClasseListModule' , canActivate: [AuthGuard] },
    { path: 'enseignants/:id',  loadChildren: './pages/enseignant-edit/enseignant-edit.module#EnseignantEditModule' , canActivate: [AuthGuard] },
    { path: 'enseignants',  loadChildren: './pages/enseignant-list/enseignant-list.module#EnseignantListModule' , canActivate: [AuthGuard] },
    { path: 'etudiants/:id',  loadChildren: './pages/etudiant-edit/etudiant-edit.module#EtudiantEditModule' , canActivate: [AuthGuard] },
    { path: 'etudiants',  loadChildren: './pages/etudiant-list/etudiant-list.module#EtudiantListModule' , canActivate: [AuthGuard] },
    { path: 'examens/:id',  loadChildren: './pages/examen-edit/examen-edit.module#ExamenEditModule' , canActivate: [AuthGuard] },
    { path: 'examens',  loadChildren: './pages/examen-list/examen-list.module#ExamenListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'matieres/:id',  loadChildren: './pages/matiere-edit/matiere-edit.module#MatiereEditModule' , canActivate: [AuthGuard] },
    { path: 'matieres',  loadChildren: './pages/matiere-list/matiere-list.module#MatiereListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
