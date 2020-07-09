import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Section } from '../models/page-meta';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {

  constructor(
    private http: HttpClient,
  ) { }

  getPageLayout(): Observable<Section[]> {
    return this.http.get<Section[]>('https://bovisync.bitbucket.io/sample_data/page_meta.json')
    .pipe(
      map((data: Section[]) => data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(errMsg);
  }
}
