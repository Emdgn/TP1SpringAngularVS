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
import { LieuComponent } from './Lieu/lieu.component';
import { AfficherLieuxComponent } from './Lieu/afficher-lieux/afficher-lieux.component';
import { AjouterLieuComponent } from './Lieu/ajouter-lieu/ajouter-lieu.component';
import { ModifierLieuComponent } from './Lieu/modifier-lieu/modifier-lieu.component';

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
    ModifierLieuComponent
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
