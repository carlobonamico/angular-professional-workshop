import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  @Input() categories = [];

  @Output() selected = new EventEmitter<string>();

  @Input() selectedCategory: string;

  constructor() { }

  ngOnInit() {
  }

  select(category) {
    this.selectedCategory = category;
    this.selected.emit(category);
  }

}
