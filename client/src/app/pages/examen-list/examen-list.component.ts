import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ExamenService } from '../../services/examen.service';
// Import Models
import { Examen } from '../../domain/alpha_db/examen';

// START - USED SERVICES
/**
* ExamenService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ExamenService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Examen
 * @class ExamenListComponent
 */
@Component({
    selector: 'app-examen-list',
    templateUrl: './examen-list.component.html',
    styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {
    list: Examen[];
    search: any = {};
    idSelected: string;
    constructor(
        private examenService: ExamenService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.examenService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Examen to remove
     *
     * @param {string} id Id of the Examen to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Examen
     */
    deleteItem() {
        this.examenService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
