import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChefOrchestre } from 'src/app/Model/chef-orchestre.model';
import { ChefOrchestreServiceService } from 'src/app/Service/chef-orchestre-service.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {


  constructor(private cs:ChefOrchestreServiceService, private route:Router){}

  listeChefs!:Observable<ChefOrchestre[]>;




  ngOnInit(): void {
    this.listeChefs = this.cs.findAllChefOrchestres();
  }

  supprimer(id:number)
  {
    this.cs.supprimerChefOrchestre(id).subscribe();
    this.route.navigateByUrl("chefs"); // go dans le path
  }

  getChefByNumChef(id:number)
  {
    this.route.navigateByUrl("updateChef/" + id); //go dans le path
  }







}
