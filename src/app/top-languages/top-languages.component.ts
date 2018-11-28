import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { CONFIG, Configuration } from '../configuration';

@Component({
  selector: 'app-top-languages',
  templateUrl: './top-languages.component.html',
  styleUrls: ['./top-languages.component.css']
})
export class TopLanguagesComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    if (!this.buckets) {
      this.buckets = [];
    }
    this.visibleBuckets = this.buckets.slice(0, this.limit);

  }

  @Input() buckets;

  limit = 3;

  visibleBuckets = [];

  constructor(@Inject(CONFIG) configuration : Configuration) {
    this.limit = configuration.maxResults;
   }

  ngOnInit() {
  }

}
