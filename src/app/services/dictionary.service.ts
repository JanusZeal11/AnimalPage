import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ItemMeta } from '../models/item-meta';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  itemMetadata = new Map<string, ItemMeta>();

  constructor(
    private http: HttpClient,
  ) { }

  getDictionary(): Observable<boolean> {
    return this.http.get<ItemMeta[]>('https://bovisync.bitbucket.io/sample_data/item_meta.json')
      .pipe(
        map(data => {
          data.forEach(
            (element: ItemMeta) => {
              this.itemMetadata.set(element.shortName, element);
            });
          return true;
        }),
        catchError(this.handleError)
      );
  }

  getItemDetails(id: string): ItemMeta {
    if (!this.itemMetadata) {
      this.getDictionary().subscribe(
        () => {
          return this.itemMetadata.get(id);
        }
      );
    }
    return this.itemMetadata.get(id);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(errMsg);
  }
}
