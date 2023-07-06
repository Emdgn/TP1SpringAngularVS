import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterOeuvreComponent } from './Oeuvre/ajouter-oeuvre/ajouter-oeuvre.component';
import { AfficherOeuvresComponent } from './Oeuvre/afficher-oeuvres/afficher-oeuvres.component';
import { ModifierOeuvreComponent } from './Oeuvre/modifier-oeuvre/modifier-oeuvre.component';
<<<<<<< HEAD
import { LieuComponent } from './Lieu/lieu.component';
import { AfficherLieuxComponent } from './Lieu/afficher-lieux/afficher-lieux.component';
import { AjouterLieuComponent } from './Lieu/ajouter-lieu/ajouter-lieu.component';
import { ModifierLieuComponent } from './Lieu/modifier-lieu/modifier-lieu.component';
=======
import { LieuComponent } from './lieu/lieu.component';
import { AjouterSolisteComponent } from './SolisteComponent/ajouter-soliste/ajouter-soliste.component';
import { ListeSolisteComponent } from './SolisteComponent/liste-soliste/liste-soliste.component';

>>>>>>> a1067fb437ae1b322f6fd4b887eedc677209f844

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    AjouterOeuvreComponent,
    AfficherOeuvresComponent,
    ModifierOeuvreComponent,
    LieuComponent,
    AfficherLieuxComponent,
    AjouterLieuComponent,
    ModifierLieuComponent
=======
    AjouterSolisteComponent,
    ListeSolisteComponent
>>>>>>> a1067fb437ae1b322f6fd4b887eedc677209f844
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
