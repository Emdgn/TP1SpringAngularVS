import { Injectable } from '@angular/core';
import { Soliste } from '../models/soliste';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolisteService {

  constructor(private http:HttpClient) { }


  enregistrerSoliste(soliste:Soliste):Observable<Soliste>
  {
    return this.http.post<Soliste>("http://localhost:8080/enregistrerSoliste", soliste);
  }

  listeSoliste():Observable<Soliste[]> {
    return this.http.get<Soliste[]>("http://localhost:8080/listeSoliste");
  }

  supprimerSoliste(idSoliste:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/supprimerSoliste/" + idSoliste);
  }

  modifierSoliste(soliste:Soliste):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierSoliste/", soliste);
  }

  getSolisteById(idSoliste:number):Observable<Soliste> {
    return this.http.get<Soliste>("http://localhost:4200/getSoliste/" + idSoliste);
  }

  

  
  

}
