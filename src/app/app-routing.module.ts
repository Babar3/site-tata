import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EcoleComponent } from './ecole/ecole.component';
import { IefComponent } from './ief/ief.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'ecole', component:EcoleComponent},
  {path: 'ief', component:IefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
