import { Component, OnInit } from '@angular/core';
import { BookClientService } from './book-client.service';
import { RandomBookService } from './random-book.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-professional-workshop';

  books = [];
  languages = [];

  topLanguagesStream: Observable<any>;

  randomBookStream: Observable<any>;

  currentCategory;

  categories = ["adventure","fantasy","comics"];

  constructor(private bookClient: BookClientService,
    private randomBookService: RandomBookService) {

  }

  ngOnInit() {
    this.selectCategory(this.categories[0]);

    this.topLanguagesStream = this.bookClient.getLanguages(this.currentCategory);

    this.randomBookStream = this.randomBookService.getRandomBookStream();
  }

  selectCategory(category){
    this.currentCategory = category;
    this.bookClient.getBooks(this.currentCategory).subscribe( (bookData: any) => {
      this.books = bookData.hits.hits; //bookData["hits"]["hits"];
    });
  }
  addLanguage() {
    this.languages.unshift({
      key: "Esperanto",
      doc_count: 128736

    });
  }
}
