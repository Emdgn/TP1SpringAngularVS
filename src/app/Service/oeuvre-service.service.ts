import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oeuvre } from '../Model/oeuvre';

@Injectable({
  providedIn: 'root'
})
export class OeuvreServiceService {
  apiURLAjouterOeuvre = "http://localhost:8080/oeuvre/create"
  apiURLSupprimerOeuvre = "http://localhost:8080/oeuvre/delete"
  apiURLObtenirOeuvres = "http://localhost:8080/oeuvre/get"
  apiURLModifierOeuvre = "http://localhost:8080/oeuvre/update"

  constructor(private http:HttpClient) { }

  ajoutOeuvre(oeuvre: Oeuvre) {
    console.log(oeuvre);
    return this.http.post(this.apiURLAjouterOeuvre, oeuvre);
  }

  obtenirOeuvre(numOeuvre: number) {
    return this.http.get<Oeuvre>(`${this.apiURLObtenirOeuvres}/${numOeuvre}`);
  }

  modifierOeuvre(oeuvre: Oeuvre) {
    return this.http.put(`${this.apiURLModifierOeuvre}/${oeuvre.numOeuvre}`, oeuvre);
  }

  supprimerOeuvre(numOeuvre: number) {
    return this.http.delete(`${this.apiURLSupprimerOeuvre}/${numOeuvre}`);
  }

  findAllOeuvres() {
    return this.http.get<Oeuvre[]>(this.apiURLObtenirOeuvres);
  }
}
