// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { ClasseService } from '../../services/classe.service';
import { ExamenService } from '../../services/examen.service';
import { EnseignantService } from '../../services/enseignant.service';
import { EtudiantService } from '../../services/etudiant.service';
import { MatiereService } from '../../services/matiere.service';

// Import Models
import { Classe } from '../../domain/alpha_db/classe';
import { Etudiant } from '../../domain/alpha_db/etudiant';
import { Enseignant } from '../../domain/alpha_db/enseignant';
import { Examen } from '../../domain/alpha_db/examen';
import { Matiere } from '../../domain/alpha_db/matiere';

// START - USED SERVICES
/**
* ClasseService.create
*	@description CRUD ACTION create
*
* ClasseService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ClasseService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ExamenService.findBy_classe
*	@description CRUD ACTION findBy_classe
*	@param Objectid key Id of model to search for
*
* EnseignantService.findBy_classe
*	@description CRUD ACTION findBy_classe
*	@param Objectid key Id of model to search for
*
* EtudiantService.findBy_classe
*	@description CRUD ACTION findBy_classe
*	@param Objectid key Id of model to search for
*
* MatiereService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Classe
 */
@Component({
    selector: 'app-classe-edit',
    templateUrl: 'classe-edit.component.html',
    styleUrls: ['classe-edit.component.css']
})
export class ClasseEditComponent implements OnInit {
    item: Classe;
    
    list_matiere: Matiere[];
    
    externalEtudiant__classe: Etudiant[];
    externalEnseignant__classe: Enseignant[];
    externalExamen__classe: Examen[];
    model: Classe;
    formValid: Boolean;

    constructor(
    private classeService: ClasseService,
    private examenService: ExamenService,
    private enseignantService: EnseignantService,
    private etudiantService: EtudiantService,
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Classe();
        this.externalEtudiant__classe = [];
        this.externalEnseignant__classe = [];
        this.externalExamen__classe = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.classeService.get(id).subscribe(item => this.item = item);
                this.etudiantService.findBy_classe(id).subscribe(list => this.externalEtudiant__classe = list);
                this.enseignantService.findBy_classe(id).subscribe(list => this.externalEnseignant__classe = list);
                this.examenService.findBy_classe(id).subscribe(list => this.externalExamen__classe = list);
            }
            // Get relations
            this.matiereService.list().subscribe(list => this.list_matiere = list);
        });
    }

    /**
     * Check if an Matiere is in  _matiere
     *
     * @param {string} id Id of Matiere to search
     * @returns {boolean} True if it is found
     */
    containMatiere(id: string): boolean {
        if (!this.item._matiere) return false;
        return this.item._matiere.indexOf(id) !== -1;
    }

    /**
     * Add Matiere from Classe
     *
     * @param {string} id Id of Matiere to add in this.item._matiere array
     */
    addMatiere(id: string) {
        if (!this.item._matiere)
            this.item._matiere = [];
        this.item._matiere.push(id);
    }

    /**
     * Remove an Matiere from a Classe
     *
     * @param {number} index Index of Matiere in this.item._matiere array
     */
    removeMatiere(index: number) {
        this.item._matiere.splice(index, 1);
    }

    /**
     * Save Classe
     *
     * @param {boolean} formValid Form validity check
     * @param Classe item Classe to save
     */
    save(formValid: boolean, item: Classe): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.classeService.update(item).subscribe(data => this.goBack());
            } else {
                this.classeService.create(item).subscribe(data => this.goBack());
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



