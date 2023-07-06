import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterOeuvreComponent } from './Oeuvre/ajouter-oeuvre/ajouter-oeuvre.component';
import { AfficherOeuvresComponent } from './Oeuvre/afficher-oeuvres/afficher-oeuvres.component';
import { ModifierOeuvreComponent } from './Oeuvre/modifier-oeuvre/modifier-oeuvre.component';

const routes: Routes = [
  { path: 'ajouterOeuvre', component: AjouterOeuvreComponent },
  { path: 'afficherOeuvres', component: AfficherOeuvresComponent },
  {path : "modifierOeuvre/:isbnOeuvre", component: ModifierOeuvreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
