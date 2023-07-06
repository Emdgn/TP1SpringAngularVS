import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SolisteService } from 'src/app/Service/soliste.service';

@Component({
  selector: 'app-ajouter-soliste',
  templateUrl: './ajouter-soliste.component.html',
  styleUrls: ['./ajouter-soliste.component.css']
})
export class AjouterSolisteComponent implements OnInit {


  solisteForm!:FormGroup;

  constructor(private ss:SolisteService, private formBuilder:FormBuilder, private router:Router) {}

  ngOnInit(): void {

    this.solisteForm = this.formBuilder.group(
      {
        nom:[null],
        prenom:[null],
        dateNaissance:[null],
        nationalite:[null]
      }
    )
  }


  enregistrerSoliste()
  {

    this.ss.enregistrerSoliste(this.solisteForm.value).subscribe();
  }

}
