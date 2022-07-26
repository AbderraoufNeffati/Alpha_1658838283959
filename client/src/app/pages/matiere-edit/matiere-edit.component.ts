// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { MatiereService } from '../../services/matiere.service';
import { ExamenService } from '../../services/examen.service';
import { EnseignantService } from '../../services/enseignant.service';
import { EtudiantService } from '../../services/etudiant.service';
import { ClasseService } from '../../services/classe.service';

// Import Models
import { Matiere } from '../../domain/alpha_db/matiere';
import { Examen } from '../../domain/alpha_db/examen';
import { Enseignant } from '../../domain/alpha_db/enseignant';
import { Etudiant } from '../../domain/alpha_db/etudiant';
import { Classe } from '../../domain/alpha_db/classe';

// START - USED SERVICES
/**
* MatiereService.create
*	@description CRUD ACTION create
*
* MatiereService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* MatiereService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ExamenService.findBy_matiere
*	@description CRUD ACTION findBy_matiere
*	@param Objectid key Id of model to search for
*
* EnseignantService.findBy_matiere
*	@description CRUD ACTION findBy_matiere
*	@param Objectid key Id of model to search for
*
* EtudiantService.findBy_matiere
*	@description CRUD ACTION findBy_matiere
*	@param Objectid key Id of model to search for
*
* ClasseService.findBy_matiere
*	@description CRUD ACTION findBy_matiere
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Matiere
 */
@Component({
    selector: 'app-matiere-edit',
    templateUrl: 'matiere-edit.component.html',
    styleUrls: ['matiere-edit.component.css']
})
export class MatiereEditComponent implements OnInit {
    item: Matiere;
    
    externalExamen__matiere: Examen[];
    externalEnseignant__matiere: Enseignant[];
    externalEtudiant__matiere: Etudiant[];
    externalClasse__matiere: Classe[];
    model: Matiere;
    formValid: Boolean;

    constructor(
    private matiereService: MatiereService,
    private examenService: ExamenService,
    private enseignantService: EnseignantService,
    private etudiantService: EtudiantService,
    private classeService: ClasseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Matiere();
        this.externalExamen__matiere = [];
        this.externalEnseignant__matiere = [];
        this.externalEtudiant__matiere = [];
        this.externalClasse__matiere = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.matiereService.get(id).subscribe(item => this.item = item);
                this.examenService.findBy_matiere(id).subscribe(list => this.externalExamen__matiere = list);
                this.enseignantService.findBy_matiere(id).subscribe(list => this.externalEnseignant__matiere = list);
                this.etudiantService.findBy_matiere(id).subscribe(list => this.externalEtudiant__matiere = list);
                this.classeService.findBy_matiere(id).subscribe(list => this.externalClasse__matiere = list);
            }
            // Get relations
        });
    }


    /**
     * Save Matiere
     *
     * @param {boolean} formValid Form validity check
     * @param Matiere item Matiere to save
     */
    save(formValid: boolean, item: Matiere): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.matiereService.update(item).subscribe(data => this.goBack());
            } else {
                this.matiereService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



