// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { EtudiantService } from '../../services/etudiant.service';
import { ExamenService } from '../../services/examen.service';
import { MatiereService } from '../../services/matiere.service';
import { ClasseService } from '../../services/classe.service';

// Import Models
import { Etudiant } from '../../domain/alpha_db/etudiant';
import { Classe } from '../../domain/alpha_db/classe';
import { Examen } from '../../domain/alpha_db/examen';
import { Matiere } from '../../domain/alpha_db/matiere';

// START - USED SERVICES
/**
* EtudiantService.create
*	@description CRUD ACTION create
*
* EtudiantService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* EtudiantService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ExamenService.findBy_etudiant
*	@description CRUD ACTION findBy_etudiant
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
 * This component allows to edit a Etudiant
 */
@Component({
    selector: 'app-etudiant-edit',
    templateUrl: 'etudiant-edit.component.html',
    styleUrls: ['etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
    item: Etudiant;
    
    list_classe: Classe[];
    
    list_matiere: Matiere[];
    
    externalExamen__etudiant: Examen[];
    model: Etudiant;
    formValid: Boolean;

    constructor(
    private etudiantService: EtudiantService,
    private examenService: ExamenService,
    private matiereService: MatiereService,
    private classeService: ClasseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Etudiant();
        this.externalExamen__etudiant = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.etudiantService.get(id).subscribe(item => this.item = item);
                this.examenService.findBy_etudiant(id).subscribe(list => this.externalExamen__etudiant = list);
            }
            // Get relations
            this.classeService.list().subscribe(list => this.list_classe = list);
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
     * Add Matiere from Etudiant
     *
     * @param {string} id Id of Matiere to add in this.item._matiere array
     */
    addMatiere(id: string) {
        if (!this.item._matiere)
            this.item._matiere = [];
        this.item._matiere.push(id);
    }

    /**
     * Remove an Matiere from a Etudiant
     *
     * @param {number} index Index of Matiere in this.item._matiere array
     */
    removeMatiere(index: number) {
        this.item._matiere.splice(index, 1);
    }

    /**
     * Save Etudiant
     *
     * @param {boolean} formValid Form validity check
     * @param Etudiant item Etudiant to save
     */
    save(formValid: boolean, item: Etudiant): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.etudiantService.update(item).subscribe(data => this.goBack());
            } else {
                this.etudiantService.create(item).subscribe(data => this.goBack());
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



