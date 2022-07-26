/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE classeBaseService PLEASE EDIT ../classe.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Classe } from '../../domain/alpha_db/classe';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Classe.service.ts
 */

/*
 * SCHEMA DB Classe
 *
	{
		nom: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_classe: {
			type: Schema.ObjectId,
			ref : "Etudiant"
		},
		_classe: [{
			type: Schema.ObjectId,
			ref : "Enseignant"
		}],
		_classe: {
			type: Schema.ObjectId,
			ref : "Examen"
		},
		_matiere: [{
			type: Schema.ObjectId,
			ref : "Classe"
		}],
	}
 *
 */
@Injectable()
export class ClasseBaseService {

    contextUrl: string = environment.endpoint + '/classe';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ClasseService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Classe): Observable<Classe> {
        return this.http
            .post<Classe>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ClasseService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ClasseService.findBy_matiere
    *   @description CRUD ACTION findBy_matiere
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_matiere(id: string): Observable<Classe[]> {
        return this.http
            .get<Classe[]>(this.contextUrl + '/findBy_matiere/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ClasseService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Classe> {
        return this.http
            .get<Classe>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ClasseService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Classe[]> {
        return this.http
            .get<Classe[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ClasseService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Classe): Observable<Classe> {
        return this.http
            .post<Classe>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}