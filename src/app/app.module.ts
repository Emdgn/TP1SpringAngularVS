import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertComponent } from './concert/concert.component';
import { FormulaireConcertComponent } from './formulaire-concert/formulaire-concert.component';
import { UpdateConcertComponent } from './update-concert/update-concert.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    FormulaireConcertComponent,
    UpdateConcertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
