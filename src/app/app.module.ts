import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChefsComponent } from './chefOrchestre/chefs/chefs.component';
import { UpdateChefComponent } from './chefOrchestre/update-chef/update-chef.component';
import { FormChefComponent } from './chefOrchestre/form-chef/form-chef.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChefsComponent,
    UpdateChefComponent,
    FormChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
