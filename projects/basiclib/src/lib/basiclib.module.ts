import { NgModule } from '@angular/core';
import { BasiclibComponent } from './basiclib.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BasiclibComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [BasiclibComponent, CardComponent]
})
export class BasiclibModule { }
