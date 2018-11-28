import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BasiclibModule } from 'basiclib';
import { TopLanguagesComponent } from './top-languages/top-languages.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { BookCardComponent } from './book-card/book-card.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { CardSetComponent } from './card-set/card-set.component';
import { CONFIG } from './configuration';

@NgModule({
  declarations: [
    AppComponent,
    TopLanguagesComponent,
    CategoriesListComponent,
    SidebarLayoutComponent,
    BookCardComponent,
    CardLayoutComponent,
    CardSetComponent
  ],
  imports: [
    BrowserModule,
    BasiclibModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: CONFIG, useValue: {
        maxResults : 4
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
