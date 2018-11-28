import { Component, OnInit, Input, Optional } from '@angular/core';
import { CardSetComponent } from '../card-set/card-set.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book;

  constructor(@Optional() cardSet: CardSetComponent) {
    console.log("BookCardComponent - cardset " + cardSet);
    cardSet.registerCard();
  }

  ngOnInit() {
  }

}
