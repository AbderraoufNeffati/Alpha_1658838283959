// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { EnseignantService } from '../../services/enseignant.service';
import { ExamenService } from '../../services/examen.service';
import { MatiereService } from '../../services/matiere.service';
import { ClasseService } from '../../services/classe.service';

// Import Models
import { Enseignant } from '../../domain/alpha_db/enseignant';
import { Classe } from '../../domain/alpha_db/classe';
import { Examen } from '../../domain/alpha_db/examen';
import { Matiere } from '../../domain/alpha_db/matiere';

// START - USED SERVICES
/**
* EnseignantService.create
*	@description CRUD ACTION create
*
* EnseignantService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* EnseignantService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ExamenService.findBy_enseignant
*	@description CRUD ACTION findBy_enseignant
*	@param Objectid key Id of model to search for
*
* MatiereService.list
*	@description CRUD ACTION list
*
* ClasseService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Enseignant
 */
@Component({
    selector: 'app-enseignant-edit',
    templateUrl: 'enseignant-edit.component.html',
    styleUrls: ['enseignant-edit.component.css']
})
export class EnseignantEditComponent implements OnInit {
    item: Enseignant;
    
    list_classe: Classe[];
    
    list_matiere: Matiere[];
    
    externalExamen__enseignant: Examen[];
    model: Enseignant;
    formValid: Boolean;

    constructor(
    private enseignantService: EnseignantService,
    private examenService: ExamenService,
    private matiereService: MatiereService,
    private classeService: ClasseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Enseignant();
        this.externalExamen__enseignant = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.enseignantService.get(id).subscribe(item => this.item = item);
                this.examenService.findBy_enseignant(id).subscribe(list => this.externalExamen__enseignant = list);
            }
            // Get relations
            this.classeService.list().subscribe(list => this.list_classe = list);
            this.matiereService.list().subscribe(list => this.list_matiere = list);
        });
    }

    /**
     * Check if an Classe is in  _classe
     *
     * @param {string} id Id of Classe to search
     * @returns {boolean} True if it is found
     */
    containClasse(id: string): boolean {
        if (!this.item._classe) return false;
        return this.item._classe.indexOf(id) !== -1;
    }

    /**
     * Add Classe from Enseignant
     *
     * @param {string} id Id of Classe to add in this.item._classe array
     */
    addClasse(id: string) {
        if (!this.item._classe)
            this.item._classe = [];
        this.item._classe.push(id);
    }

    /**
     * Remove an Classe from a Enseignant
     *
     * @param {number} index Index of Classe in this.item._classe array
     */
    removeClasse(index: number) {
        this.item._classe.splice(index, 1);
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
     * Add Matiere from Enseignant
     *
     * @param {string} id Id of Matiere to add in this.item._matiere array
     */
    addMatiere(id: string) {
        if (!this.item._matiere)
            this.item._matiere = [];
        this.item._matiere.push(id);
    }

    /**
     * Remove an Matiere from a Enseignant
     *
     * @param {number} index Index of Matiere in this.item._matiere array
     */
    removeMatiere(index: number) {
        this.item._matiere.splice(index, 1);
    }

    /**
     * Save Enseignant
     *
     * @param {boolean} formValid Form validity check
     * @param Enseignant item Enseignant to save
     */
    save(formValid: boolean, item: Enseignant): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.enseignantService.update(item).subscribe(data => this.goBack());
            } else {
                this.enseignantService.create(item).subscribe(data => this.goBack());
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



