import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChefOrchestre } from '../Model/chef-orchestre.model';

@Injectable({
  providedIn: 'root'
})
export class ChefOrchestreServiceService {

  
  constructor(private http:HttpClient) { }

  ajoutChefOrchestre(ChefOrchestre:ChefOrchestre):Observable<ChefOrchestre>
  {
    return this.http.post<ChefOrchestre>("http://localhost:8080/ajoutChefOrchestre", ChefOrchestre);
  }

  supprimerChefOrchestre(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/supprimerChefOrchestre/" + id);
  }

  findAllChefOrchestres():Observable<ChefOrchestre[]>
  {
    return this.http.get<ChefOrchestre[]>("http://localhost:8080/getListeChefOrchestres");
  }

  getChefOrchestreByIsbn(id:number):Observable<ChefOrchestre>
  {
    return this.http.get<ChefOrchestre>("http://localhost:8080/getChefOrchestre/" + id);
  }

  updateChefOrchestre(ChefOrchestre:ChefOrchestre):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierChefOrchestre", ChefOrchestre);
  }

}
