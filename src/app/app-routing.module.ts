import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterOeuvreComponent } from './Oeuvre/ajouter-oeuvre/ajouter-oeuvre.component';
import { AfficherOeuvresComponent } from './Oeuvre/afficher-oeuvres/afficher-oeuvres.component';
import { ModifierOeuvreComponent } from './Oeuvre/modifier-oeuvre/modifier-oeuvre.component';
import { ModifierSolisteComponent } from './SolisteComponent/modifier-soliste/modifier-soliste.component';
import { ListeSolisteComponent } from './SolisteComponent/liste-soliste/liste-soliste.component';
import { AjouterSolisteComponent } from './SolisteComponent/ajouter-soliste/ajouter-soliste.component';

const routes: Routes = [
  { path: 'ajouterOeuvre', component: AjouterOeuvreComponent },
  { path: 'afficherOeuvres', component: AfficherOeuvresComponent },
  {path : "modifierOeuvre/:numOeuvre", component: ModifierOeuvreComponent},
  {path : "modifierSoliste/:idSoliste", component: ModifierSolisteComponent},
  {path: "infoSoliste", component: ListeSolisteComponent},
  {path: "ajouterSoliste", component: AjouterSolisteComponent},
  {path: "afficherSoliste", component: ListeSolisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
