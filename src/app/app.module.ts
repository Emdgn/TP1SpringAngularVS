import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AjouterSolisteComponent } from './SolisteComponent/ajouter-soliste/ajouter-soliste.component';
import { ListeSolisteComponent } from './SolisteComponent/liste-soliste/liste-soliste.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterSolisteComponent,
    ListeSolisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
