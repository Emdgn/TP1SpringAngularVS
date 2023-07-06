import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SolisteService } from 'src/app/Service/soliste.service';
import { Soliste } from 'src/app/models/soliste';

@Component({
  selector: 'app-liste-soliste',
  templateUrl: './liste-soliste.component.html',
  styleUrls: ['./liste-soliste.component.css']
})
export class ListeSolisteComponent implements OnInit {

  listeSoliste!:Observable<Soliste[]>;

  constructor(private ss:SolisteService, private ar:ActivatedRoute, private router:Router) {
    console.log("url : " + ar.snapshot.url)
  }

  ngOnInit(): void {
    this.listeSoliste = this.ss.listeSoliste();
  }

  delete(idSoliste:number)
  {
    this.ss.supprimerSoliste(idSoliste).subscribe();
    this.router.navigateByUrl("infoSoliste");
  }

  update(idSoliste:number)
  {
    this.router.navigateByUrl("modifierSoliste/" + idSoliste);
  }

}
