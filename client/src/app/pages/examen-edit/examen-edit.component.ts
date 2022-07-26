// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { ExamenService } from '../../services/examen.service';
import { ClasseService } from '../../services/classe.service';
import { EtudiantService } from '../../services/etudiant.service';
import { MatiereService } from '../../services/matiere.service';
import { EnseignantService } from '../../services/enseignant.service';

// Import Models
import { Examen } from '../../domain/alpha_db/examen';
import { Classe } from '../../domain/alpha_db/classe';
import { Enseignant } from '../../domain/alpha_db/enseignant';
import { Etudiant } from '../../domain/alpha_db/etudiant';
import { Matiere } from '../../domain/alpha_db/matiere';

// START - USED SERVICES
/**
* ExamenService.create
*	@description CRUD ACTION create
*
* ExamenService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ExamenService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ClasseService.list
*	@description CRUD ACTION list
*
* EtudiantService.list
*	@description CRUD ACTION list
*
* MatiereService.list
*	@description CRUD ACTION list
*
* EnseignantService.list
*	@description CRUD ACTION list
*
* ExamenService.valide
*	@description l&#x27;api est valide l&#x27;examen
*	@param String id id de l&#x27;examen
*	@returns Boolean
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Examen
 */
@Component({
    selector: 'app-examen-edit',
    templateUrl: 'examen-edit.component.html',
    styleUrls: ['examen-edit.component.css']
})
export class ExamenEditComponent implements OnInit {
    item: Examen;
    
    list_classe: Classe[];
    
    list_enseignant: Enseignant[];
    
    list_etudiant: Etudiant[];
    
    list_matiere: Matiere[];
    
    model: Examen;
    formValid: Boolean;

    constructor(
    private examenService: ExamenService,
    private classeService: ClasseService,
    private etudiantService: EtudiantService,
    private matiereService: MatiereService,
    private enseignantService: EnseignantService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Examen();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.examenService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.classeService.list().subscribe(list => this.list_classe = list);
            this.enseignantService.list().subscribe(list => this.list_enseignant = list);
            this.etudiantService.list().subscribe(list => this.list_etudiant = list);
            this.matiereService.list().subscribe(list => this.list_matiere = list);
        });
    }


    /**
     * Save Examen
     *
     * @param {boolean} formValid Form validity check
     * @param Examen item Examen to save
     */
    save(formValid: boolean, item: Examen): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.examenService.update(item).subscribe(data => this.goBack());
            } else {
                this.examenService.create(item).subscribe(data => this.goBack());
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



