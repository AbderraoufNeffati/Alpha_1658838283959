import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ClasseService } from '../../services/classe.service';
// Import Models
import { Classe } from '../../domain/alpha_db/classe';

// START - USED SERVICES
/**
* ClasseService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ClasseService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Classe
 * @class ClasseListComponent
 */
@Component({
    selector: 'app-classe-list',
    templateUrl: './classe-list.component.html',
    styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit {
    list: Classe[];
    search: any = {};
    idSelected: string;
    constructor(
        private classeService: ClasseService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.classeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Classe to remove
     *
     * @param {string} id Id of the Classe to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Classe
     */
    deleteItem() {
        this.classeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
