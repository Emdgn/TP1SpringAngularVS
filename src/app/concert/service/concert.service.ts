import { Injectable } from '@angular/core';
import { Concert } from '../model/concert.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http:HttpClient) { }

  ajoutConcert(concert:Concert):Observable<Concert>
  {
    return this.http.post<Concert>("http://localhost:8080/creerConcert", concert);
  }

  supprimerConcert(num:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteConcert/" + num);
  }

  findAllConcert():Observable<Concert[]>
  {
    return this.http.get<Concert[]>("http://localhost:8080/listeConcert");
  }

  getConcertByNum(num:number):Observable<Concert>
  {
    return this.http.get<Concert>("http://localhost:8080/getLivre/" + num);
  }

  updateConcert(concert:Concert):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierConcert/", concert);
  }
}
