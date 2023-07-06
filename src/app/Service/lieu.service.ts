import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from '../models/lieu';


@Injectable({
  providedIn: 'root'
})
export class LieuService {

  private apiURLListeLieu = 'http://localhost:8080/listeLieu';
  private apiURLSaveLieu = 'http://localhost:8080/saveLieu';
  private apiURLModifierLieu = 'http://localhost:8080/modifierLieu';
  private apiURLDeleteLieu = 'http://localhost:8080/deleteLieu';

  constructor(private http: HttpClient) { }

  getListeLieu(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>(this.apiURLListeLieu);
  }

  saveLieu(lieu: Lieu): Observable<Lieu> {
    return this.http.post<Lieu>(this.apiURLSaveLieu, lieu);
  }

  modifierLieu(lieu: Lieu): Observable<boolean> {
    return this.http.put<boolean>(this.apiURLModifierLieu, lieu);
  }

  deleteLieu(id: number): Observable<boolean> {
    const url = `${this.apiURLDeleteLieu}/${id}`;
    return this.http.delete<boolean>(url);
  }
}
