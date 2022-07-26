import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { MatiereService } from '../../services/matiere.service';
// Import Models
import { Matiere } from '../../domain/alpha_db/matiere';

// START - USED SERVICES
/**
* MatiereService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* MatiereService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Matiere
 * @class MatiereListComponent
 */
@Component({
    selector: 'app-matiere-list',
    templateUrl: './matiere-list.component.html',
    styleUrls: ['./matiere-list.component.css']
})
export class MatiereListComponent implements OnInit {
    list: Matiere[];
    search: any = {};
    idSelected: string;
    constructor(
        private matiereService: MatiereService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.matiereService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Matiere to remove
     *
     * @param {string} id Id of the Matiere to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Matiere
     */
    deleteItem() {
        this.matiereService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
