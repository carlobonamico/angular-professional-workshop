import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookClientService {

  constructor( private http: HttpClient) {

  }

  // https://api.archivelab.org/books/:itemid/searchinside?q=:query
  // https://api.archivelab.org/books/:itemid/pages/:page
  // https://api.archivelab.org/books/:itemid
  /** https://archive.readme.io/docs/fulltext-search */
  public getBooks(topic: string) {
    return this.http.get('https://api.archivelab.org/v1/search/books?text='+topic);
    //MOCK DATA return this.http.get('/assets/books-adventure.json');
  }


  public getLanguages(topic: string) {
    return this.http.get('https://api.archivelab.org/v1/search/books?text='+topic)
    //return this.http.get('/assets/books-adventure.json')
      .pipe(
        map((results: any) => {
          return results.aggregations['top-languages'].buckets;
        })
      );
  }
}
