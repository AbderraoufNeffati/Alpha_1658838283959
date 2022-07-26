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
 *  FOR CUSTOMIZE examenBaseService PLEASE EDIT ../examen.service.ts
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
import { Examen } from '../../domain/alpha_db/examen';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Examen.service.ts
 */

/*
 * SCHEMA DB Examen
 *
	{
		note: {
			type: 'Number'
		},
		place: {
			type: 'String'
		},
		valid: {
			type: 'Boolean'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_classe: {
			type: Schema.ObjectId,
			ref : "Examen"
		},
		_enseignant: {
			type: Schema.ObjectId,
			ref : "Examen"
		},
		_etudiant: {
			type: Schema.ObjectId,
			ref : "Examen"
		},
		_matiere: {
			type: Schema.ObjectId,
			ref : "Examen"
		},
	}
 *
 */
@Injectable()
export class ExamenBaseService {

    contextUrl: string = environment.endpoint + '/examen';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ExamenService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Examen): Observable<Examen> {
        return this.http
            .post<Examen>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ExamenService.delete
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
    * ExamenService.findBy_classe
    *   @description CRUD ACTION findBy_classe
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_classe(id: string): Observable<Examen[]> {
        return this.http
            .get<Examen[]>(this.contextUrl + '/findBy_classe/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ExamenService.findBy_enseignant
    *   @description CRUD ACTION findBy_enseignant
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_enseignant(id: string): Observable<Examen[]> {
        return this.http
            .get<Examen[]>(this.contextUrl + '/findBy_enseignant/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ExamenService.findBy_etudiant
    *   @description CRUD ACTION findBy_etudiant
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_etudiant(id: string): Observable<Examen[]> {
        return this.http
            .get<Examen[]>(this.contextUrl + '/findBy_etudiant/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ExamenService.findBy_matiere
    *   @description CRUD ACTION findBy_matiere
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_matiere(id: string): Observable<Examen[]> {
        return this.http
            .get<Examen[]>(this.contextUrl + '/findBy_matiere/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * ExamenService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Examen> {
        return this.http
            .get<Examen>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ExamenService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Examen[]> {
        return this.http
            .get<Examen[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ExamenService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Examen): Observable<Examen> {
        return this.http
            .post<Examen>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs


    /**
    * ExamenService.valide
    *   @description l&#x27;api est valide l&#x27;examen
    *   @param String id id de l&#x27;examen
    *   @returns Boolean
    *
    */
    valide(...params: any[]): Observable<any> {
        return this.http
            .post<any>(this.contextUrl + '/{id}/valide', {})
            .pipe(
                map(response => response)
            );
    }

}
