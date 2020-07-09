import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AnimalData } from '../models/animal-data';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private http: HttpClient,
  ) { }

  getAnimal(): Observable<AnimalData> {
    return this.http.get<AnimalData>('https://bovisync.bitbucket.io/sample_data/animal_data.json')
      .pipe(
        map((data: AnimalData) => data),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(errMsg);
  }
}
