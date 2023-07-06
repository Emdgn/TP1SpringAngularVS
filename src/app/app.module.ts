import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcertComponent } from './concert/concert.component';
import { FormulaireConcertComponent } from './concert/formulaire-concert/formulaire-concert.component';
import { UpdateConcertComponent } from './concert/update-concert/update-concert.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    FormulaireConcertComponent,
    UpdateConcertComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
