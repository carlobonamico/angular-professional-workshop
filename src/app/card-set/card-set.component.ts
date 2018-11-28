import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-set',
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  registerCard() {
    this.count++;
  }
}
