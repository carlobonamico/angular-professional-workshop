import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('https://api.archivelab.org/v1/search/books?text=adventure');
  }
}
