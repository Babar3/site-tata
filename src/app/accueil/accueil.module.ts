import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { ImageSliderModule } from '../image-slider/image-slider.module'



@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    ImageSliderModule
  ],
  exports: [
    AccueilComponent
  ]
})
export class AccueilModule { }
