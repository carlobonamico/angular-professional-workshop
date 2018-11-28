import { Component, OnInit } from '@angular/core';
import { BookClientService } from './book-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-professional-workshop';

  books = [];

  constructor(private bookClient: BookClientService) {

  }

  ngOnInit() {
    this.bookClient.getBooks('topic').subscribe( (bookData: any) => {
      this.books = bookData.hits.hits;

    });
  }
}
