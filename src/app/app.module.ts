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


import { AjouterSolisteComponent } from './SolisteComponent/ajouter-soliste/ajouter-soliste.component';
import { ListeSolisteComponent } from './SolisteComponent/liste-soliste/liste-soliste.component';
import { ModifierSolisteComponent } from './SolisteComponent/modifier-soliste/modifier-soliste.component';
import { ModifierLieuComponent } from './lieu/modifier-lieu/modifier-lieu.component';
import { AjouterLieuComponent } from './lieu/ajouter-lieu/ajouter-lieu.component';
import { AfficherLieuxComponent } from './lieu/afficher-lieux/afficher-lieux.component';
import { LieuComponent } from './lieu/lieu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjouterOeuvreComponent,
    AfficherOeuvresComponent,
    ModifierOeuvreComponent,
    LieuComponent,
    AfficherLieuxComponent,
    AjouterLieuComponent,
    ModifierLieuComponent,
    AjouterSolisteComponent,
    ListeSolisteComponent,
    ModifierSolisteComponent
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
