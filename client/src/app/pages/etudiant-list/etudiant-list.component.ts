import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { EtudiantService } from '../../services/etudiant.service';
// Import Models
import { Etudiant } from '../../domain/alpha_db/etudiant';

// START - USED SERVICES
/**
* EtudiantService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* EtudiantService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Etudiant
 * @class EtudiantListComponent
 */
@Component({
    selector: 'app-etudiant-list',
    templateUrl: './etudiant-list.component.html',
    styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
    list: Etudiant[];
    search: any = {};
    idSelected: string;
    constructor(
        private etudiantService: EtudiantService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.etudiantService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Etudiant to remove
     *
     * @param {string} id Id of the Etudiant to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Etudiant
     */
    deleteItem() {
        this.etudiantService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
