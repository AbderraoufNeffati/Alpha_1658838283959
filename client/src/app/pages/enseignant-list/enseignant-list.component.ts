import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { EnseignantService } from '../../services/enseignant.service';
// Import Models
import { Enseignant } from '../../domain/alpha_db/enseignant';

// START - USED SERVICES
/**
* EnseignantService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* EnseignantService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Enseignant
 * @class EnseignantListComponent
 */
@Component({
    selector: 'app-enseignant-list',
    templateUrl: './enseignant-list.component.html',
    styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {
    list: Enseignant[];
    search: any = {};
    idSelected: string;
    constructor(
        private enseignantService: EnseignantService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.enseignantService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Enseignant to remove
     *
     * @param {string} id Id of the Enseignant to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Enseignant
     */
    deleteItem() {
        this.enseignantService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
