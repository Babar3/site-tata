import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilModule } from './accueil/accueil.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcoleModule } from './ecole/ecole.module';
import { IefModule } from './ief/ief.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    EcoleModule,
    IefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
