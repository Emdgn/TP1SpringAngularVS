import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolisteService } from 'src/app/services/soliste.service';

@Component({
  selector: 'app-modifier-soliste',
  templateUrl: './modifier-soliste.component.html',
  styleUrls: ['./modifier-soliste.component.css']
})
export class ModifierSolisteComponent implements OnInit {

  solisteForm!:FormGroup;
  idSoliste!:number;
  
  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private ss:SolisteService, private router:Router) {
    this.idSoliste = ar.snapshot.params["idSoliste"];
  }



  ngOnInit(): void {
    this.ss.getSolisteById(this.idSoliste).subscribe(soliste => {
    this.solisteForm = this.formBuilder.group({
        nom: [soliste.nom],
        prenom: [soliste.prenom],
        dateNaissance: [soliste.dateNaissance],
        nationalite: [soliste.nationalite]
      })
  });
  }

  modifierSoliste() {
    this.ss.modifierSoliste(this.solisteForm.value);
    this.router.navigateByUrl("listeSoliste");
  }

}
