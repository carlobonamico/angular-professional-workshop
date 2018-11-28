import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomBookService {

  constructor() { }

  getRandomBookStream() {
    return interval(2000).pipe(
      map(e => {
      return {
        title: "Random Title " + e,
        author: "Random Author" + e
      };
      })
    );
  }
}
